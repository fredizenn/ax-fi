<script lang="ts" context="module">
</script>

<script lang="ts">
	import { cn } from '$lib/utils';
	import { createEventDispatcher } from 'svelte';
	import Box from './box.svelte';
	import { Tooltip } from 'flowbite-svelte';
	import Dropdown from './dropdown.svelte';
	import DropdownItem from './dropdownItem.svelte';
	import Helper from './helper.svelte';

	export let title = '';
	export let description = '';
	export let icon = '';
	export let iconSize = 23;
	export let otherClasses: string = '';
	export let showActivate = true;
	export let showDeactivate = true;
	export let isOnline = false;
	export let showOverflow = true;
	export let optionList: string[] = [];

	interface IOptionsList {
		name: string;
	}

	const dispatch = createEventDispatcher();
	let open = false;
</script>

<Box
	shadow={showActivate}
	otherClasses={cn(
		` ${showActivate ? 'bg-gray-300/40' : 'bg-white'} rounded-none flex flex-col gap-2 h-full`,
		otherClasses
	)}
>
	<div class="p-4 flex flex-col gap-2 group">
		<div class="w-full flex justify-between">
			<div
				class="bg-blue-500 w-10 h-10 grid place-content-center p-1 rounded-full text-white relative"
			>
				<iconify-icon {icon} style="font-size: {iconSize ?? 23}px;" />
				<div class="absolute right-0 -top-1" class:hidden={!isOnline}>
					<div class="bg-white rounded-full w-4 h-4 grid place-content-center">
						<iconify-icon
							icon="svg-spinners:pulse-multiple"
							class="text-green-500"
							style="font-size: 23px;"
						/>
					</div>
				</div>
				<Tooltip placement="right">Online</Tooltip>
			</div>
			<div class="opacity-0 group-hover:opacity-100" class:hidden={!showOverflow}>
				<button
					on:click={() => (open = !open)}
					class="hover:bg-gray-100 rounded-full grid place-content-center p-1.5"
				>
					<iconify-icon icon="carbon:overflow-menu-vertical" class="" style="font-size: 23px;" />
				</button>
				<div class="absolute" class:hidden={!open}>
					<Dropdown bind:open otherClasses="w-32 loginbox border">
						{#each optionList as name}
							<DropdownItem on:click={() => dispatch('actionClicked', name)}>{name}</DropdownItem>
						{/each}
					</Dropdown>
				</div>
			</div>
		</div>

		<p class="font-medium">{title}</p>
		<p
			class="text-sm text-gray-500 flex-grow line-clamp-2"
			title={description}
			class:hidden={!description}
		>
			{description}
		</p>
		<slot />
	</div>

	<Helper
		showIcon={false}
		otherClasses="flex gap-2 justify-center py-2 rounded-t-none antialiased {showActivate
			? 'bg-gray-300'
			: 'bg-white '}
	"
	>
		<button
			on:click={() => dispatch('update')}
			class="bg-blue-500 text-white rounded-md grid place-content-center text-sm py-1.5 hover:bg-blue-600 font-medium px-3"
		>
			<div class="flex items-center gap-1">
				<iconify-icon icon="carbon:ibm-cloud-direct-link-2-dedicated" style="font-size: 15px;" />
				Update
			</div>
		</button>
		<button
			class:hidden={!showActivate}
			on:click={() => dispatch('activate')}
			class="bg-teal-500 text-white rounded-md grid place-content-center text-sm py-1.5 hover:bg-teal-600 font-medium px-3"
		>
			<div class="flex items-center gap-1">
				<iconify-icon icon="fluent:lock-closed-key-24-filled" style="font-size: 15px;" />
				Activate
			</div>
		</button>
		<button
			class:hidden={!showDeactivate}
			on:click={() => dispatch('deactivate')}
			class="bg-red-500 text-white rounded-md grid place-content-center text-sm py-1.5 hover:bg-red-600 font-medium px-3"
		>
			<div class="flex items-center gap-1">
				<iconify-icon icon="fluent:tag-lock-20-filled" style="font-size: 15px;" />
				Deactivate
			</div>
		</button>
	</Helper>
</Box>
