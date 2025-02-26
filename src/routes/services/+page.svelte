<script lang="ts">
	import Icon from '@iconify/svelte';
	import Categories from '$modules/categories/index.svelte';
	import {
		Button,
		ButtonGroup,
		Checkbox,
		Dropdown,
		Radio,
		RadioButton,
		Search
	} from 'flowbite-svelte';
	import List from './data/list.svelte';
	const types = [
		{ name: 'Ministry', checked: false },
		{ name: 'Agency', checked: false },
		{ name: 'Individual', checked: true },
		{ name: 'Business', checked: false }
	];

	let currentFilter: 'Individual' | 'Business' | 'Ministry' | 'Agency' = 'Individual';
	let searchTerm = '';
</script>

<div class="-mt-24 flex w-full flex-col items-center justify-center">
	<div
		class="z-40 flex gap-6 w-2/3 items-center justify-between rounded bg-white px-4 py-4 text-black shadow-lg focus:ring-0"
	>
	<ButtonGroup>
		{#each types as t (t.name)}
			<RadioButton value={t.name} bind:group={currentFilter}>{t.name}</RadioButton>
		{/each}
	</ButtonGroup>
	<Search size="md" bind:value={searchTerm} />

	</div>

	<!-- <Dropdown class="h-44 overflow-y-auto text-black px-3 pb-3 text-sm">
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
</Dropdown> -->
</div>

<List filter={currentFilter} {searchTerm} />
