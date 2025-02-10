<script lang="ts">
	import { page } from '$app/stores';
	import type { IMenuItem } from '$lib/types';

	export let menuItems: IMenuItem[] = [];
	export let hideSidebar: boolean;
	$: activePage = $page.url.pathname;

	const name = (str: string) => {
		if (str) {
			const parts = str.split('/');
			return parts[2];
		}
	};
	function isActive(path: string) {
		if (name(activePage) === name(path)) {
			return true;
		} else {
			return false;
		}
	}

	// function buttonClicked(path: string) {
	// 	if (isActive(path)) {
	// 		return;
	// 	} else {
	// 		goto(path);
	// 	}
	// }
</script>

<ul class="side-menu top-7 relative">
	{#if menuItems.length}
		{#each menuItems as { title, path, icon }}
			{@const active = name(activePage) === name(path ?? '')}
			<li class:active class="relative">
				<a class:cursor-default={active} class="space-x-3 pl-3" href={path}>
					<iconify-icon {icon} />
					<!-- {#if hideSidebar} -->
					<!-- <div class="z-[3000] absolute">

						<Tooltip defaultClass="absolute z-[3000] py-2 px-3 text-sm font-medium" placement="right">{title}</Tooltip>
					</div> -->
					<!-- {/if} -->
					<span class="text hidden md:block">{title}</span>
				</a>
			</li>
		{/each}
	{/if}
</ul>
