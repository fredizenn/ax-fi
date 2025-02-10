<script lang="ts" context="module">
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
	import { Button, Modal } from 'flowbite-svelte';
	import SlideOver from '$lib/components/layout/slideOver.svelte';
	let options: any = [];

	const dispatch = createEventDispatcher();
	
	let open = false;
	

	let { children } = $props();
</script>

<div class="">
	<div class="bg-white pt-10 sm:pt-20">
		<div class="mx-auto max-w-7xl px-6 lg:px-8">
			<div class="mx-auto max-w-2xl lg:mx-0">
				<p class="text-base/7 pb-10 font-medium text-gray-400">Services by the Ghana Revenue Authority</p>
				<img src={gra_logo} alt="GRA" class="h-48 w-auto" />
				<!-- <h2 class="mt-2 text-5xl font-semibold tracking-tight text-gray-900 sm:text-7xl">
					Ghana Revenue Authority
				</h2> -->
				<!-- <p class="mt-8 text-pretty text-lg font-medium text-gray-500 sm:text-xl/8">Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui lorem cupidatat commodo. Elit sunt amet fugiat veniam occaecat fugiat.</p> -->
			</div>
		</div>
	</div>
</div>
<div class="bg-white py-10">
	<div class="mx-auto max-w-7xl px-6 lg:px-8">
		

		<div class="py-6">
			{@render children()}
		</div>
	</div>
</div>

