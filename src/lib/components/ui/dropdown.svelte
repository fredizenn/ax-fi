<script>
	import { cn } from '$lib/utils';
	import { clickOutsideAction } from 'svelte-legos';

	import { slide } from 'svelte/transition';

	export let open = false;
	export let otherClasses = '';
</script>

{#if open}
	<div class="relative">
		<div
			on:clickoutside={() => (open = false)}
			class={cn(
				'bg-white absolute right-0 py-2 rounded-md shadow-md shadow-gray-300 z-10',
				otherClasses
			)}
			transition:slide
			use:clickOutsideAction
		>
			<slot />
		</div>
	</div>
{/if}
