<script lang="ts" context="module">
	const kind = {
		success: 'bg-green-400 hover:bg-green-500 text-white',
		primary: 'bg-indigo-500 hover:bg-indigo-600 text-white',
		ghost: 'border-gray-400 border hover:bg-gray-100',
		default: 'border-gray-400 border hover:bg-gray-100',
		warning: 'bg-yellow-300  hover:bg-yellow-400'
	};
</script>

<script lang="ts">
	import { cn } from '$lib/utils';
	import Icon from '@iconify/svelte';

	export let label = '';
	export let type: 'submit' | 'button' | 'reset' = 'button';
	export let color: 'primary' | 'success' | 'warning' | 'default' | 'ghost' = 'default';
	export let disabled = false;
	export let busy = false;
	export let leadingIcon = '';
	export let trailingIcon = '';
	export let otherClasses = '';
	export let contextKey: symbol | null = null;
</script>

<button
	disabled={disabled || busy}
	{type}
	class={cn(
		` rounded-[5px] text-sm px-4 py-2 ${kind[color]} disabled:bg-gray-400 disabled:text-gray-200`,
		otherClasses
	)}
	on:click
>
	<div class="flex items-center gap-1.5 justify-center whitespace-nowrap">
		{#if leadingIcon}
			<Icon icon={leadingIcon} class="w-5 h-5" />
		{/if}
		{label}
		{#if busy}
			<Icon icon="svg-spinners:180-ring-with-bg" class="text-black" />
		{/if}
		{#if trailingIcon}
			<iconify-icon icon={trailingIcon} />
		{/if}
		<slot />
	</div>
</button>
