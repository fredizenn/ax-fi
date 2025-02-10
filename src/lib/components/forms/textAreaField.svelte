<script lang="ts">
	import { fade } from 'svelte/transition';
	import { getContext, createEventDispatcher } from 'svelte';
	import { nanoid } from 'nanoid';
	import { key } from './form';

	export let label: string = '';
	export let name: string = '';
	export let required: Boolean = false;
	export let placeholder: string = '';
	export let readonly = false;
	export let rows = 3;
	export let allowAutoSpan = false;
	export let contextKey: symbol | null = null;
	const { touched, errors, data }: any = getContext(contextKey || key);

	let id = nanoid();
	let dispatch = createEventDispatcher();

	function onChange() {
		dispatch('change', { name, value: $data[name] });
	}

	$: hasError = $touched[name] && $errors[name]?.length;
	$: error = $errors[name]?.join(', ');

	function autoExpandTextarea(event: any) {
		if (!allowAutoSpan) {
			return;
		}
		event.target.style.height = 'auto';
		event.target.style.height = event.target.scrollHeight + 'px';
	}
</script>

<fieldset class="flex flex-col gap-1.5 relative">
	<label for={id} class=" text-gray-600 dark:text-white">
		{label}
		{#if required}
			<span class="text-red-500 pl-1">*</span>
		{/if}
	</label>

	<textarea
		class:error={hasError}
		class:success={!readonly && !hasError && $touched[name]}
		class:touched={!readonly && $touched[name]}
		class:readonly
		class="border border-gray-300 shadow-gray-50 rounded-[5px] shadow text-black w-full py-2 outline-transparent focus:outline-transparent focus:outline-none px-3 placeholder:text-gray-500/80 dark:shadow-transparent"
		{rows}
		{placeholder}
		{readonly}
		{id}
		value={$data[name] || ''}
		on:change={onChange}
		on:input={autoExpandTextarea}
		{name}
		{...$$restProps}
	/>

	{#if hasError}
		<label
			for={id}
			transition:fade
			class="flex items-center gap-1 pt-1 text-sm absolute right-2 top-9 v-error-container"
			class:text-red-600={hasError}
		>
			<span class="hidden backdrop-blur-sm v-error-message">
				{error}
			</span>
			<iconify-icon
				icon="solar:danger-circle-bold-duotone"
				class="cursor-pointer select-none ml-auto v-error-svg text-red-500 hover:text-red-600"
				style="font-size: 18px;"
			/>
		</label>
	{/if}
</fieldset>

<style>
	.error {
		@apply border-red-600;
	}
	.success {
		@apply border-green-600;
	}
	.readonly {
		@apply bg-[#f1f1f1];
	}
</style>
