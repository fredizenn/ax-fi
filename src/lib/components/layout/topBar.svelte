<script lang="ts">
	import { page } from '$app/stores';
	import { Navbar, NavBrand, NavLi, NavUl, NavHamburger, Button, Modal } from 'flowbite-svelte';
	import logo from '$static/assets/coa.svg';
	import Icon from '@iconify/svelte';
	import { createEventDispatcher } from 'svelte';
	import Login from '$modules/auth/login/index.svelte';
	$: activeUrl = $page.url.pathname;

	let showModal = false;
	export let open = false;
	export let message = '';
	export let icon = 'line-md:alert-circle';
	export let disableYes = false;
	export let busy = false;

	$: if (activeUrl === '/auth/signup') {
		open = false
	}
	const dispatch = createEventDispatcher()
</script>

<Navbar class="bg-white fixed top-0 left-0 z-50 shadow-sm w-full">
	<div class="flex w-full md:px-24 justify-between ">
		<div class="flex items-center">
			<NavBrand href="/">
				<img src={logo} class="h-8 sm:h-12" alt="Flowbite Logo" />
				<!-- <span class="self-center whitespace-nowrap text-xl font-semibold dark:text-white">Flowbite</span> -->
			</NavBrand>
			<NavHamburger />
			<NavUl {activeUrl}>
				<NavLi href="#">About</NavLi>
				<NavLi href="#">Browse Services</NavLi>
				<NavLi href="#">Track Application Status</NavLi>
				<NavLi href="#">Feedback</NavLi>
			</NavUl>
		</div>
		<div class="hidden md:flex items-center text-sm gap-x-4">	
			<button on:click={() => open = true} class="btn btn-primary">Log In</button>
			<a class:hidden={activeUrl === '/auth/signup'} href="/auth/signup" class="btn btn-secondary">Sign Up</a>
		</div>

		<div class="md:hidden flex items-center">
			<Icon icon="solar:user-linear" class="h-6 w-6" />
		</div>
	</div>
</Navbar>


<div class="fixed z-[3100]">
<Modal class="" {open} on:close={() => dispatch('cancel')} size="md">
	<Login />
</Modal>
</div>
