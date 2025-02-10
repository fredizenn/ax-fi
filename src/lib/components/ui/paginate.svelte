<script lang="ts">
	import { Toggle, Tooltip } from 'flowbite-svelte';
	import Dropdown from './dropdown.svelte';
	export let currentPage: number;
	export let hasNextPage: boolean;
	export let hasPreviousPage: boolean;
	export let onNextPage: () => void;
	export let onPreviousPage: () => void;
	export let refresh: (() => void) | null = null;
	export let totalPages: number;
	export let hideLabel = true;
	export let textSmall = false;
	export let hiddenColumns: string[] = [];
	export let tableColumns: any[] = []; // todo: sest the right type

	// let hideState = tableColumns.map(x => )
	let hideState: Record<string, boolean> = {};
	hiddenColumns.forEach((x) => (hideState[x] = true));
	$: hiddenColumns = Object.keys(hideState).filter((x) => hideState[x]);

	let open = false;
</script>

<div class:text-sm={textSmall} class="flex gap-2 justify-between w-full items-center text-gray-600">
	<button
		class=" items-center justify-center gap-1 text-sm font-semibold p-2"
		class:hidden={!totalPages}
		class:flex={totalPages}
		on:click={onPreviousPage}
		disabled={!hasPreviousPage}
		class:active={hasPreviousPage}
		class:hover:bg-gray-200={hasPreviousPage}
		class:rounded-md={hasPreviousPage}
		class:text-gray-300={!hasPreviousPage}
	>
		<iconify-icon icon="material-symbols:arrow-back" style="font-size: 18px" />
		{#if !hideLabel}
			<span>PREV</span>
		{/if}
	</button>
	<div class="text-sm font-semibold">
		{#if !hideLabel}
			<span>Page</span>
		{/if}
		<span class:hidden={!totalPages} class:flex={totalPages}>{currentPage}/{totalPages}</span>
	</div>
	<button
		class="flex items-center justify-center gap-1 text-sm font-semibold p-2"
		class:hidden={!totalPages}
		class:flex={totalPages}
		on:click={onNextPage}
		disabled={!hasNextPage}
		class:active={hasNextPage}
		class:hover:bg-gray-200={hasNextPage}
		class:rounded-md={hasNextPage}
		class:text-gray-300={!hasNextPage}
	>
		{#if !hideLabel}
			<span>NEXT</span>
		{/if}
		<iconify-icon icon="material-symbols:arrow-forward" style="font-size: 18px" />
	</button>
	<button class="hover:text-gray-600 font-bold rotate-2" class:hidden={!refresh} on:click={refresh}>
		<iconify-icon icon="ph:arrows-clockwise" class="hover:text-gray-400 hover:animate-spin" />
	</button>
	<div class:hidden={!tableColumns.length} class:flex={tableColumns}>
		<button on:click={() => (open = !open)}>
			<iconify-icon icon="ph:columns" class="text-red-500 hover:text-red-800" />
			<Tooltip>Toggle Columns</Tooltip>
		</button>
		<Dropdown
			bind:open
			otherClasses="overflow-y-auto h-56 px-3 min-w-40  pb-3 text-sm scrollbar-thumb-blue scrollbar-thumb-rounded scrollbar-track-blue-lighter scrollbar-w-2 scrolling-touch"
		>
			{#each tableColumns as column}
				<li class="flex px-2 py-1.5 w-full whitespace-nowrap">
					<Toggle bind:checked={hideState[column.id]} class="cursor-pointer" />
					{column.header}
				</li>
			{/each}
		</Dropdown>
	</div>
</div>
