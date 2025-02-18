<script lang="ts" module>
	interface IBreadCrumb {
		route: string;
		routeLabel: string;
		id: number;
	}
</script>

<script lang="ts">
	import Icon from '@iconify/svelte';
	import { createEventDispatcher } from 'svelte';
	import backdrop from '$static/assets/boat.jpg';
	import gra_logo from '$static/assets/gra-logo.webp';
	import arch from '$static/assets/gh-arch.jpg';
	import { Banner, Button, ImagePlaceholder, Modal, Skeleton } from 'flowbite-svelte';
	import SlideOver from '$lib/components/layout/slideOver.svelte';
	let options: any = [];

	const dispatch = createEventDispatcher();

	let open = false;

	let { children } = $props();
</script>

<div class="relative isolate h-96 overflow-hidden">
	<div class="absolute inset-0 -z-10 size-full bg-gray-900" aria-hidden="true">
		<img
			src={arch}
			alt=""
			class="absolute inset-0 -z-10 size-full object-cover object-[center_12%] opacity-60"
		/>
	</div>

</div>

<div class="bg-white py-10">
	<div class="mx-auto px-2 sm:px-40">
		
		<div class="py-6">
			{@render children()}
		</div>
	</div>
</div>
