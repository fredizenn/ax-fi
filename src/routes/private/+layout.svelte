<script lang="ts">
	import { goto } from '$app/navigation';
	import SideNav from '$lib/components/layout/sideNav.svelte';
	import TopBar from '$lib/components/layout/topBar.svelte';
	import AlertDialog from '$lib/components/ui/AlertDialog.svelte';
	import BreadCrumb from '$lib/components/ui/breadCrumb.svelte';
	import { activePage, breadCrumb } from '$data/appStore';
	import { menuItems } from '$data/userStore';
	import { logout, userInfo } from '$svc/auth';

	$: activeBreadCrumb = $breadCrumb[$breadCrumb.length - 1].title;
	let hideSidebar = false;
	let showAlert = false;

	function optionClicked({ detail }: any) {
		const { index, path } = detail;
		breadCrumb.removeFromFront(index);
		goto(path);
	}
	function signout() {
		logout();
		goto('/');
	}
</script>

<!-- <div class="w-screen h-screen overflow-hidden">
	<section id="sidebar" class:hide={hideSidebar} class="relative">
		<a href="/private/dashboard" class="brand flex flex-col pb-4">
			<img src="/logo.png" alt="Logo" class={hideSidebar ? 'w-12 ' : 'w-12 md:w-24'} />
			<span class="font-thin text-base {hideSidebar ? 'block' : 'md:hidden'}">LMHSI</span>
			<p class="font-medium text-lg text-center {hideSidebar ? 'hidden' : 'hidden md:block'}">
				Last Mile Health Sage Insights
			</p>
		</a>
		<SideNav menuItems={$menuItems} {hideSidebar} />
	</section>

	<section id="content" class="w-full h-full">
		<TopBar
			user={$userInfo}
			bind:hideSidebar
			on:signout={() => (showAlert = true)}
			on:profile={() => goto('/private/profile')}
		/>
		<section class="w-full h-full flex flex-col bg-[#f4f3ef] rounded-tl-lg">
			{#if $activePage.showBreadCrumb}
				<div class="head-title pt-3 pl-6">
					<div class="left">
						<BreadCrumb options={$breadCrumb} {activeBreadCrumb} on:click={optionClicked} />
					</div>
				</div>
			{/if}
			<div class=" w-full h-full flex-grow overflow-hidden">
				<slot />
			</div>
		</section>
	</section>
</div>

<AlertDialog
	bind:open={showAlert}
	message="Are you sure you want to sign out?"
	on:cancel={() => (showAlert = false)}
	on:yes={signout}
/>

<Dialog /> -->
