<script lang="ts" context="module">
	export type IModalPlacement =
		| 'top-left'
		| 'top-center'
		| 'top-right'
		| 'center-left'
		| 'center'
		| 'bottom-left'
		| 'bottom-center'
		| 'bottom-right';

	export type IModalSize = 'xs' | 'sm' | 'md' | 'lg' | 'xl';
</script>

<script lang="ts">
	import type { IButton } from '$lib/components/layout/sideModal.svelte';
	import Button from '$lib/components/ui/button.svelte';
	import { Modal } from 'flowbite-svelte';
	import { createEventDispatcher, onDestroy } from 'svelte';

	export let open = false;
	export let size: IModalSize = 'md';
	export let placement: IModalPlacement = 'center';
	export let title = '';
	export let allowAutoClose = false;
	export let buttons: IButton[] = [];
	export let busy = false;
	export let isValid = false;
	export let showModalButtons = false;
	export let edit = false;
	export let dismissable = true;

	const dispatch = createEventDispatcher();

	$: id = `${placement}-modal`;
	let buttonIndex = -1;

	onDestroy(() => {
		buttonIndex = -1;
	});
</script>

<Modal
	on:close={() => dispatch('close')}
	{open}
	{id}
	{placement}
	{size}
	{title}
	autoclose={allowAutoClose}
	{dismissable}
	backdropClass="fixed inset-0 z-[1000] bg-gray-900 bg-opacity-30 dark:bg-opacity-80"
	dialogClass="fixed top-0 start-0 end-0 h-modal md:inset-0 md:h-full z-[1100] w-full p-4 flex"
>
	<div class="h-full w-full flex flex-col">
		<div class="flex-grow">
			<slot />
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

			<div class=" pt-3 gap-3 mt-4 grid" class:hidden={!showModalButtons}>
				<Button
					type="button"
					disabled={!isValid}
					color="primary"
					on:click={() => dispatch('submit')}
					{busy}
					label={edit ? 'Update' : 'Submit'}
				/>
			</div>
		</div>
	</div>
</Modal>
