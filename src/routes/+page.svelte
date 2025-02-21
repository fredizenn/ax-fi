<script lang="ts">
	import { goto } from '$app/navigation';
	import { page } from '$app/stores';
	import Icon from '@iconify/svelte';
	import Services from '$modules/services/index.svelte';
	import { Button, ButtonGroup, Dropdown, DropdownItem, Radio, Search } from 'flowbite-svelte';
	import Categories from '$modules/categories/index.svelte';
	import Hero from '$modules/homePage/hero.svelte';
	import LandingPageRadio from '$modules/homePage/landingPageRadio.svelte';
	// if ($isAuthenticated) {
	// 	goto(`/private`);
	// } else {
	// }

	let activeRadio = 0;
	const items = [
		{
			label: 'All Categories'
		},
		{
			label: 'Government Agencies'
		},
		{
			label: 'Ministries'
		}
	];

	let type: 'Individual' | 'Business' = $state('Individual')

	let selectCategory = 'All categories';
</script>

<div class="space-y-8">
	<Hero />
	<div class="mx-auto space-y-12 w-full px-44">
		<LandingPageRadio individual={(currentState: any) => { type = currentState === 1 ? 'Individual' : 'Business'}} business={(currentState: any) => { type = currentState === 2 ? 'Business' : 'Individual'}} />

		<div class="mx-auto w-full sm:w-2/3">
			<form class="flex">
				<div class="relative">
					<Button
						class="border-primary-700 min-w-48 whitespace-nowrap rounded-e-none border border-e-0 bg-gray-900 py-4 text-white focus:ring-0"
					>
						{selectCategory}
						<Icon icon="flowbite:chevron-down-outline" class="h-5 w-6" />
					</Button>
					<Dropdown classContainer="w-40">
						{#each items as { label }}
							<DropdownItem
								on:click={() => {
									selectCategory = label;
								}}
								class={selectCategory === label ? 'underline' : ''}
							>
								{label}
							</DropdownItem>
						{/each}
					</Dropdown>
				</div>
				<Search
					size="md"
					class="rounded-none py-4 focus:ring-1"
					placeholder="Find what you are looking for..."
				/>
				<Button class="rounded-s-none bg-gray-200 !p-2.5 ring-amber-100 focus:ring-2">
					<Icon icon="iconamoon:search" class="h-5 w-7 text-black" />
				</Button>
			</form>
		</div>
		<Services filter={type} />
		<Categories filter={type} />
	</div>
</div>
