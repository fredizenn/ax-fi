<script lang="ts">
	import Icon from '@iconify/svelte';
    import Categories from '$modules/categories/index.svelte';
	import { Button, Checkbox, Dropdown, Radio, Search } from 'flowbite-svelte';
	import List from './data/list.svelte';
	const types = [
		{ name: 'Ministry', checked: false },
		{ name: 'Agency', checked: false },
		{ name: 'Individual', checked: true },
    { name: 'Business', checked: false },
	];

    let currentFilter: 'Individual' | 'Business' | 'Ministry' | 'Agency' = 'Individual'
	let searchTerm = '';
</script>

<div class="-mt-20 w-full flex flex-col justify-center items-center ">
    <Button
        class="bg-indigo-700 shadow-lg focus:ring-0 flex items-center justify-between py-3 w-1/5 z-40"
	>Search services<Icon
		icon="line-md:chevron-down"
		class="ms-2 h-5 w-5 text-white dark:text-white"
	/></Button
>
<Dropdown class="h-44 overflow-y-auto text-black px-3 pb-3 text-sm">
	<div slot="header" class="p-3">
		<Search size="md" bind:value={searchTerm} />
	</div>
	{#each types as t (t.name)}
		<li class="rounded p-2 hover:bg-gray-100 dark:hover:bg-gray-600">
			<Radio value={t.name} bind:group={currentFilter}>{t.name}</Radio>
		</li>
	{/each}
	<div
		slot="footer"
		class="-mb-1 flex items-center bg-gray-50 justify-center p-3 text-center text-xs font-medium text-gray-600 hover:bg-gray-100 dark:bg-gray-700"
	>
    Check option to search by
    <Icon icon="gridicons:help-outline" class="ml-1 w-5 h-5" />	</div>
</Dropdown>
</div>


<List filter={currentFilter} {searchTerm} />

