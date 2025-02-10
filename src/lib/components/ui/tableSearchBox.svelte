<script lang="ts">
	// import { goto } from '$app/navigation';
	// import { page } from '$app/stores';
	import { createEventDispatcher } from 'svelte';
	export let placeholder = '';
	export let value = '';
	export let readonly = false;
	export let addParams = false;

	// $: ({ searchParams, pathname } = $page.url);

	const dispatch = createEventDispatcher();

	const onSearchKeyChange = (value: string) => {
		// // if (!addParams) return;
		// const input = event.target as HTMLInputElement;
		// // const current = new URLSearchParams(Array.from(searchParams.entries()));
		// // const value = input.value.trim();

		// // if (!value) {
		// // 	current.delete('query');
		// // } else {
		// // 	current.set('query', value);
		// // }

		// // const search = current.toString();
		// // const query = search ? `?${search}` : '';
		// // goto(`${pathname}${query}`);
		dispatch('input', value);
	};
</script>

<section class="bg-white rounded-md flex items-center p-2 border border-gray-300">
	<iconify-icon icon="eva:search-outline" class="text-xl text-gray-500" />
	<input
		bind:value
		class="outline-none px-2 border-none bg-transparent placeholder:text-sm text-sm w-full"
		{placeholder}
		{readonly}
		on:change={(e) => {
			const input = e?.target?.value || '';
			onSearchKeyChange(input);
		}}
	/>
	<button
		on:click={() => {
			value = '';
			onSearchKeyChange('');
		}}
		class="grid hover:text-red-500"
		class:hidden={!value.length}><iconify-icon icon="iconamoon:close-thin" /></button
	>
</section>
