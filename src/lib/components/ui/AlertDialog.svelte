<script>
	import { Button, Modal } from 'flowbite-svelte';
	import { createEventDispatcher } from 'svelte';
	import { scale } from 'svelte/transition';

	export let open = false;
	export let message = '';
	export let icon = 'line-md:alert-circle';
	export let disableYes = false;
	export let busy = false;

	const dispatch = createEventDispatcher();
</script>

<div class="fixed z-[3100]">
	<Modal class="" {open} on:close={() => dispatch('cancel')} size="xs">
		<div class="text-center">
			<iconify-icon {icon} style="font-size: 100px;" />
			<h3 class="mb-5 text-lg font-normal text-gray-500 dark:text-gray-400">{message}</h3>
			<Button
				disabled={disableYes || busy}
				color="red"
				class="mr-2"
				on:click={() => dispatch('yes')}
			>
				<div class="flex items-center gap-1">
					Yes, I'm sure
					{#if busy}
						<iconify-icon icon="svg-spinners:180-ring-with-bg" />
					{/if}
				</div>
			</Button>
			<Button color="alternative" on:click={() => dispatch('cancel')} disabled={busy}
				>No, cancel</Button
			>
		</div>
	</Modal>
</div>
