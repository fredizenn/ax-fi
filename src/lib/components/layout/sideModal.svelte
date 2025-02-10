<script lang="ts" context="module">
	export interface IButton {
		text: string;
		ghost?: boolean;
		primary?: boolean;
		dangerous?: boolean;
		showLoading?: boolean;
		color?: 'primary' | 'success' | 'warning' | 'default' | 'ghost';
		handler: (_: IButton) => void;
	}

	const widthKind = {
		xs: 'w-96',
		sm: 'w-[500px]',
		md: 'w-[600px]',
		// xl: 'w-[650]'
		lg: 'w-[800px]',
		xl: 'w-[800px]'
		// '2xl': 'w-[900px]',
	};
</script>

<script lang="ts">
	import { Drawer } from 'flowbite-svelte';
	import { createEventDispatcher, onDestroy } from 'svelte';
	import { sineIn } from 'svelte/easing';
	import Button from '$lib/components/ui/button.svelte';
	import Box from '$lib/components/ui/box.svelte';
	import Divider from '$lib/components/ui/divider.svelte';
	import type { IModalSize } from '$lib/components/ui/modal.svelte';
	import { browser } from '$app/environment';

	export let open = false;
	export let placement: 'left' | 'right' | 'top' | 'bottom' = 'right';
	export let title = '';
	export let id = title;
	export let size: IModalSize = 'sm';
	export let activateClickOutside = false;
	export let buttons: IButton[] = [];
	export let busy = false;
	export let isValid = false;
	export let edit = false;
	export let showModalButtons = false;
	export let showCustomButtons = false;

	$: closed = !open;

	const dispatch = createEventDispatcher();
	$: transitionParams = {
		x: placement === 'left' ? -320 : 320,
		duration: 200,
		easing: sineIn
	};

	let buttonIndex = -1;

	onDestroy(() => {
		buttonIndex = -1;
	});

	$: smallScreen = browser && window.innerWidth < 768 ? true : false;
</script>

<div class="fixed z-[3000]">
	<Drawer
		{placement}
		transitionType="fly"
		{transitionParams}
		bind:hidden={closed}
		{id}
		divClass="overflow-y-hidden fixed z-[3000] pt-4  bg-white dark:bg-gray-800 w-96"
		{activateClickOutside}
		bgOpacity="bg-opacity-30"
		width={!smallScreen ? widthKind[size] : ''}
	>
		<div class="flex flex-col h-full w-full">
			<div class="flex justify-between px-3 pb-2">
				<span class="font-medium">{title}</span>
				<div>
					<button
						on:click={() => {
							buttonIndex = -1;
							dispatch('close');
						}}
						class="w-8 h-8 text-lg p-1 rounded-md hover:bg-gray-200 text-gray-500 grid place-content-center"
					>
						<iconify-icon icon="ic:round-close" style="font-size: 20px" />
					</button>
				</div>
			</div>
			<Divider otherClasses="bg-gray-300" />
			<div class="h-full w-full">
				<div class="flex flex-col h-full">
					<Box otherClasses="flex-grow  h-[50px] w-full">
						<slot />
					</Box>
					<div
						class="bg-gray-200 px-4 py-3 gap-3 mt-4 grid"
						class:grid-cols-2={buttons.length > 1}
						class:hidden={!(buttons && buttons.length)}
					>
						{#each buttons as btn, index}
							<Button
								type="button"
								disabled={(buttonIndex === index && busy && btn.showLoading) || !isValid}
								color={btn.color}
								on:click={() => {
									buttonIndex = index;
									btn.handler(btn);
								}}
								busy={buttonIndex === index && btn.showLoading && busy}
								label={btn.text}
							/>
						{/each}
					</div>
					<div class="bg-gray-200 px-4 py-3 gap-3 mt-4 grid" class:hidden={!showModalButtons}>
						<Button
							type="button"
							disabled={!isValid}
							color="primary"
							on:click={() => dispatch('submit')}
							{busy}
							label={edit ? 'Update' : 'Submit'}
						/>
					</div>
					<div class="bg-gray-200 px-4 py-3 gap-3 mt-4 grid" class:hidden={!showCustomButtons}>
						<slot name="buttons"/>
					</div>
				</div>
			</div>
		</div>
	</Drawer>
</div>
