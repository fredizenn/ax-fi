
<script lang="ts">
	import { Modal } from 'flowbite-svelte';
	import ComponentRenderer from '../canvas/ComponentRenderer.svelte';
	import { writable } from 'svelte/store';
	import { modalConfig } from '$data/appStore';

	$: config = $modalConfig;

	function onClose({ detail }: any) {
		try {
			$modalConfig.show = false;
			if (config.onDone) {
				config.onDone(detail?.data === 'refresh');
				$modalConfig.onDone = (x) => {};
			}
		} catch (e) {
			console.log('Dialog error', e);
		}
	}
</script>

<div class="fixed z-[3000]">
	<Modal bind:open={config.show} size={config.size || 'xs'} autoclose={false} class="w-full">
		<form class="flex flex-col space-y-6" action="#">
			<h3 class="mb-4 text-xl font-medium text-gray-900 dark:text-white">{config.title || ''}</h3>
			<div class="pb-4">
				{#if config.componentConfig}
					<div class="flex">
						<ComponentRenderer descriptor={config.componentConfig} on:close={onClose} />
					</div>
				{/if}
			</div>
		</form>
	</Modal>
</div>
