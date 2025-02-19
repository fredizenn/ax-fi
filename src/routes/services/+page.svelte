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
	<a
		slot="footer"
		href="/"
		class="-mb-1 flex items-center bg-gray-50 justify-center p-3 text-center text-xs font-medium text-gray-600 hover:bg-gray-100 dark:bg-gray-700"
	>
    Check option to search by
    <Icon icon="gridicons:help-outline" class="ml-1 w-5 h-5" />	</a>
</Dropdown>
</div>


<List filter={currentFilter} {searchTerm} />


<!-- <div>
    <h2 class="text-sm font-medium text-gray-500">Pinned Projects</h2>
    <ul role="list" class="mt-3 grid grid-cols-1 gap-5 sm:grid-cols-2 sm:gap-6 lg:grid-cols-4">
      <li class="col-span-1 flex rounded-md shadow-sm">
        <div class="flex w-16 shrink-0 items-center justify-center rounded-l-md bg-pink-600 text-sm font-medium text-white">GA</div>
        <div class="flex flex-1 items-center justify-between truncate rounded-r-md border-b border-r border-t border-gray-200 bg-white">
          <div class="flex-1 truncate px-4 py-2 text-sm">
            <a href="#" class="font-medium text-gray-900 hover:text-gray-600">Graph API</a>
            <p class="text-gray-500">16 Members</p>
          </div>
          <div class="shrink-0 pr-2">
            <button type="button" class="inline-flex size-8 items-center justify-center rounded-full bg-transparent bg-white text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2">
              <span class="sr-only">Open options</span>
              <svg class="size-5" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true" data-slot="icon">
                <path d="M10 3a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3ZM10 8.5a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3ZM11.5 15.5a1.5 1.5 0 1 0-3 0 1.5 1.5 0 0 0 3 0Z" />
              </svg>
            </button>
          </div>
        </div>
      </li>
      <li class="col-span-1 flex rounded-md shadow-sm">
        <div class="flex w-16 shrink-0 items-center justify-center rounded-l-md bg-purple-600 text-sm font-medium text-white">CD</div>
        <div class="flex flex-1 items-center justify-between truncate rounded-r-md border-b border-r border-t border-gray-200 bg-white">
          <div class="flex-1 truncate px-4 py-2 text-sm">
            <a href="#" class="font-medium text-gray-900 hover:text-gray-600">Component Design</a>
            <p class="text-gray-500">12 Members</p>
          </div>
          <div class="shrink-0 pr-2">
            <button type="button" class="inline-flex size-8 items-center justify-center rounded-full bg-transparent bg-white text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2">
              <span class="sr-only">Open options</span>
              <svg class="size-5" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true" data-slot="icon">
                <path d="M10 3a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3ZM10 8.5a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3ZM11.5 15.5a1.5 1.5 0 1 0-3 0 1.5 1.5 0 0 0 3 0Z" />
              </svg>
            </button>
          </div>
        </div>
      </li>
      <li class="col-span-1 flex rounded-md shadow-sm">
        <div class="flex w-16 shrink-0 items-center justify-center rounded-l-md bg-yellow-500 text-sm font-medium text-white">T</div>
        <div class="flex flex-1 items-center justify-between truncate rounded-r-md border-b border-r border-t border-gray-200 bg-white">
          <div class="flex-1 truncate px-4 py-2 text-sm">
            <a href="#" class="font-medium text-gray-900 hover:text-gray-600">Templates</a>
            <p class="text-gray-500">16 Members</p>
          </div>
          <div class="shrink-0 pr-2">
            <button type="button" class="inline-flex size-8 items-center justify-center rounded-full bg-transparent bg-white text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2">
              <span class="sr-only">Open options</span>
              <svg class="size-5" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true" data-slot="icon">
                <path d="M10 3a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3ZM10 8.5a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3ZM11.5 15.5a1.5 1.5 0 1 0-3 0 1.5 1.5 0 0 0 3 0Z" />
              </svg>
            </button>
          </div>
        </div>
      </li>
      <li class="col-span-1 flex rounded-md shadow-sm">
        <div class="flex w-16 shrink-0 items-center justify-center rounded-l-md bg-green-500 text-sm font-medium text-white">RC</div>
        <div class="flex flex-1 items-center justify-between truncate rounded-r-md border-b border-r border-t border-gray-200 bg-white">
          <div class="flex-1 truncate px-4 py-2 text-sm">
            <a href="#" class="font-medium text-gray-900 hover:text-gray-600">React Components</a>
            <p class="text-gray-500">8 Members</p>
          </div>
          <div class="shrink-0 pr-2">
            <button type="button" class="inline-flex size-8 items-center justify-center rounded-full bg-transparent bg-white text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2">
              <span class="sr-only">Open options</span>
              <svg class="size-5" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true" data-slot="icon">
                <path d="M10 3a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3ZM10 8.5a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3ZM11.5 15.5a1.5 1.5 0 1 0-3 0 1.5 1.5 0 0 0 3 0Z" />
              </svg>
            </button>
          </div>
        </div>
      </li>
    </ul>
  </div> -->
  