<script lang="ts">
	import { page } from '$app/stores';
	import { Navbar, NavBrand, NavLi, NavUl, NavHamburger, Button, Modal, Dropdown, DropdownItem, Avatar } from 'flowbite-svelte';
	import logo from '$static/assets/coa.svg';
	import Icon from '@iconify/svelte';
	import { createEventDispatcher } from 'svelte';
	import Login from '$modules/auth/login/index.svelte';
	import { authenticated } from '$lib/stores/authStore';
	import { logout } from '$svc/auth';
	import { goto } from '$app/navigation';
	$: activeUrl = $page.url.pathname;

	const profileData = {
		fullname: 'Fred Akuffo',
		initials: 'FA',
		email: 'tJkq9@example.com'
	}

	let dropDownMenu: any = [

	// {
	// 		label: 'Profile',
	// 		path: '/profile',
	// 		icon: 'mdi:invite',
	// 		permission: '',
	// 		onClick: () => goto('/profile')
	// 	},
		{
			label: 'Wallet',
			path: '/wallet',
			icon: 'mdi-light:wallet',
			permission: '',
			onClick: () => goto('/wallet')
		},
		{
			label: 'Settings',
			icon: 'circum:settings',
			permission: '',
			onClick: () => goto('/settings')
		},
		

		{
			label: 'Logout',
			icon: 'material-symbols-light:logout-rounded',
			onClick: () => logout(),
		}
	];
	let showModal = false;
	export let open = false;
	export let message = '';
	export let icon = 'line-md:alert-circle';
	export let disableYes = false;
	export let busy = false;

	let activeClass = 'text-green-700 bg-green-700 md:bg-transparent underline underline-offset-8  md:text-green-700 md:dark:text-white dark:bg-green-600 md:dark:bg-transparent';
	let nonActiveClass = 'text-gray-600 hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-green-700 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent font-medium';
	$: if (activeUrl === '/auth/signup') {
		open = false
	}
	const dispatch = createEventDispatcher()
</script>

<Navbar class="bg-white fixed top-0 left-0 z-50 shadow-sm w-full">
	<div class="flex w-full md:px-20 justify-between ">
		<div class="flex items-center">
			<NavBrand href="/">
				<img src={logo} class="h-8 sm:h-12" alt="Coat of Arms" />
				<!-- <span class="self-center whitespace-nowrap text-xl font-semibold dark:text-white">Flowbite</span> -->
			</NavBrand>
			<NavHamburger />
			<NavUl {nonActiveClass} {activeClass} {activeUrl}>
				<NavLi href="/about/">About</NavLi>
				<NavLi href="/services/">Services</NavLi>
				<NavLi href="/application-status/">Track Application Status</NavLi>
				<NavLi href="/feedback/">Feedback</NavLi>
			</NavUl>
		</div>
		<div class="hidden md:flex items-center text-sm gap-x-4 mr-6">
			{#if $authenticated}
			<div class="flex items-center gap-4">
				<!-- {#if !isCompanyPage}
					<div><Icon icon="mdi:question-mark-circle" class="h-5 w-5 text-[#3D3D66]" /></div>
	
					<div class="hidden bg-gray-400 lg:block lg:h-6 lg:w-[2px]" aria-hidden="true"></div>
				{/if} -->
				<span
					class="hidden text-xs font-medium uppercase text-gray-600 md:block"
					>{profileData?.fullname}</span
				>
				<Avatar
					id="avatar-menu"
					size="sm"
					class="h-9 w-9 cursor-pointer justify-end bg-slate-700 text-sm font-bold text-gray-200"
					>{profileData?.initials}</Avatar
				>
				
				
	
				<button id="click" class="flex justify-end">
					<Icon icon="carbon:chevron-down" class="h-6 w-6" />
				</button>
				<Dropdown
					type="light"
					containerClass="w-[400px] transition ease-in-out delay-150 transition shadow rounded-sm p-4 py-10"
				>
					<div class="flex flex-col items-center justify-center space-y-4">
						<Avatar
							class="rounded-full border-2 border-slate-900 bg-slate-800 bg-opacity-20 text-white"
							size="lg"
						/>
						<div class="text-center">
							<div class="text-sm font-medium text-[#3D3D66]">{profileData?.fullname}</div>
							<div class="text-xs lowercase text-[#3D3D66] opacity-50">{profileData?.email}</div>
						</div>
					</div>
	
					<div class="m-2 w-full space-y-4 p-6 text-sm font-semibold text-[#3D3D66]">
							{#each dropDownMenu as { label, icon, onClick }}
								<DropdownItem defaultClass="w-full">
									<button
										on:click={onClick}
										class="flex w-full items-center space-x-4 rounded p-2 py-3 transition delay-150 duration-200 ease-in-out hover:-translate-y-1 hover:scale-100 hover:bg-gray-100"
									>
										<Icon {icon} class="h-5 w-5" /><span>{label}</span>
									</button>
								</DropdownItem>
							{/each}						
					</div>
				</Dropdown>
			</div>
			<!-- <Dropdown>
				<DropdownItem class="flex items-center justify-center gap-x-4" href="/">Wallet <Icon icon="mdi-light:wallet" class="w-5 h-5" /></DropdownItem>
				<DropdownItem class="flex items-center justify-center gap-x-4" href="/auth/profile">Settings<Icon icon="circum:settings" class="w-5 h-5" /></DropdownItem>
				<DropdownItem class="flex items-center justify-center gap-x-4" href="/auth/logout">Logout<Icon icon="material-symbols-light:logout-rounded" class="w-5 h-5" /></DropdownItem>
			</Dropdown> -->
			{:else}
			<a href="/auth/login" class="btn btn-secondary">Log In</a>
			<a href="/auth/signup" class="btn btn-secondary">Sign Up</a>
			{/if}
		</div>

		<div class="md:hidden flex items-center">
			<button>
				<Icon icon="solar:user-linear" class="h-6 w-6" />

			</button>
			<Dropdown>
				<DropdownItem href="/auth/login">Log in</DropdownItem>
				<DropdownItem href="/auth/signup">Sign up</DropdownItem>

			</Dropdown>
		</div>
	</div>
</Navbar>


<!-- <div class="fixed z-[3100]">
<Modal class="" {open} on:close={() => dispatch('cancel')} size="md">
	<Login />
</Modal>
</div> -->
