<script lang="ts">
	import { goto } from '$app/navigation';
	import { page } from '$app/stores';
	import Icon from '@iconify/svelte';
	import Services from '$modules/services/index.svelte';
	import { Button, ButtonGroup, Dropdown, DropdownItem, Radio, Search } from 'flowbite-svelte';
	import Categories from '$modules/categories/index.svelte';
	import Hero from '$modules/dashboard/hero.svelte';
	import LandingPageRadio from '$modules/dashboard/landingPageRadio.svelte';
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

	let type = $state('Individual')

	let selectCategory = 'All categories';
</script>

<div class="space-y-8">
	<Hero />
	<!-- <div class="h-3/5 bg-gray-900">
		<div class="relative isolate h-full overflow-hidden">
			<img src={backdrop} alt="" class="absolute inset-0 -z-10 size-full object-cover opacity-60" />
			<div
				class="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
				aria-hidden="true"
			>
				<div
					class="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#3b6bb4] to-[#9089fc] opacity-20 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
					style="clip-path: polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)"
				></div>
			</div>
			<div class="mx-auto max-w-7xl px-6 lg:px-8">
				<div class="mx-auto max-w-2xl py-32 sm:py-48 lg:py-56">
					<div class="text-center">
						<h1 class="text-balance text-3xl font-semibold tracking-tight text-white sm:text-3xl">
							Your Gateway to Ghana's E-Services <br /> and Payment Solutions
						</h1>
					</div>
				</div>
			</div>
			<div
				class="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]"
				aria-hidden="true"
			>
				<div
					class="relative left-[calc(50%+3rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 bg-gradient-to-tr from-[#3b6bb4] to-[#9089fc] opacity-20 sm:left-[calc(50%+36rem)] sm:w-[72.1875rem]"
					style="clip-path: polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)"
				></div>
			</div>
		</div>
	</div> -->
	<div class="mx-auto space-y-12 px-36">
		<LandingPageRadio individual={(currentState: any) => { type = currentState === 1 ? 'Individual' : 'Business'}} business={(currentState: any) => { type = currentState === 2 ? 'Business' : 'Individual'}} />
		<!-- <div class=" mx-auto flex w-full justify-center gap-x-4 p-4 align-middle">
			<Radio on:click={() => (activeRadio = 0)} checked name="h" custom>
				<div
					class:bg-amber-100={activeRadio === 0}
					class="dark:peer-checked:text-primary-500 peer-checked:border-primary-600 peer-checked:text-primary-600 inline-flex w-full cursor-pointer items-center justify-between gap-x-6 rounded-lg border border-gray-200 p-5 text-gray-500 hover:bg-amber-100/50 hover:text-gray-600 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:hover:text-gray-300"
				>
					<div>
						<div class="w-full text-base font-semibold text-black">Individual</div>
						<div class="w-full text-wrap text-xs">
							Access personal services, manage your government documents in one place.
						</div>
					</div>
					<Icon icon="fluent:person-12-filled" class="h-6 w-5" />
				</div>
			</Radio>
			<Radio on:click={() => (activeRadio = 1)} name="custom" custom>
				<div
					class:bg-amber-100={activeRadio === 1}
					class="dark:peer-checked:text-primary-500 peer-checked:border-primary-600 peer-checked:text-primary-600 inline-flex w-full cursor-pointer items-center justify-between gap-x-6 rounded-lg border border-gray-200 bg-white p-5 text-gray-500 hover:bg-amber-100/50 hover:text-gray-600 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:hover:text-gray-300"
				>
					<div class="block">
						<div class="w-full text-base font-semibold text-black">Business</div>
						<div class="w-full text-wrap text-xs">
							Register your company, and handle business compliance seamlessly.
						</div>
					</div>
					<Icon icon="ic:baseline-business-center" class="h-5 w-6" />
				</div>
			</Radio>
		</div> -->
		

		<!-- <ButtonGroup class="*:!ring-primary-700 mx-auto flex justify-center p-4 align-middle md:w-1/3">
		<Button class="bg-green-700 text-white hover:bg-green-700">
			<Icon icon="fluent:person-12-filled" class="mr-2 h-6" /> Individual
		</Button>
		<Button class="hover:bg-green-700 hover:text-white"> 
			<Icon icon="ic:baseline-business-center" class="mr-2 h-6" /> Business
		</Button>
	</ButtonGroup> -->
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
		<Services />
		<Categories />
	</div>
</div>
