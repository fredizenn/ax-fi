<script lang="ts">
	import { getContext } from 'svelte';
	import { fade } from 'svelte/transition';
	import { key } from './form';
	import Svelecte from 'svelecte';
	import _ from 'lodash';
	import { nanoid } from 'nanoid';

	export let name = '';
	export let label = '';
	// export let noLabel = false;
	export let required = false;
	export let readonly = false;
	export let placeholder = '';
	export let options: any[] = [];
	export let valueAsObject = false;
	export let creatable = false;
	export let multiple = false;
	export let searchable = true;
	export let clearable = true;
	export const updateSelection = onUpdateSelection;
	export let contextKey: symbol | null = null;

	let id = nanoid();
	let el: any;

	const { touched, errors, data }: any = getContext(contextKey || key);

	const { isArray } = _;

	let value = $data[name];
	let ready = false;

	$: hasError = $touched[name] && $errors[name]?.length;
	$: error = $errors[name]?.join(', ');

	// reset the value and make it stick
	$: if (el && options.length && !ready) {
		if (isArray(value)) {
			el.setSelection([]);
			setTimeout(() => el.setSelection([...value], true), 0);
		}
		ready = true;
	}

	function onUpdateSelection(selection: any) {
		$data[name] = selection;
	}
</script>

<fieldset class="flex flex-col gap-2 relative">
	<label for={id} class=" text-gray-600 dark:text-white" class:hidden={!label}>
		{label}
		{#if required}
			<span class="text-red-500 pl-1">*</span>
		{/if}
	</label>
	<Svelecte
		bind:this={el}
		bind:value={$data[name]}
		{name}
		{options}
		{required}
		{creatable}
		{valueAsObject}
		{placeholder}
		inputId={id}
		{multiple}
		{searchable}
		disabled={readonly}
		{clearable}
		on:change
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
