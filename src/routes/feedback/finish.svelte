<script lang="ts">
	import { goto } from '$app/navigation';
	import Button from '$lib/components/ui/button.svelte';

	import Loader from '$lib/components/ui/loader.svelte';
	import { createFeedback } from '$svc/feedback';
	import Icon from '@iconify/svelte';
	import { onDestroy, onMount } from 'svelte';
	import { activeStep } from './feedbackStore';

	export let data: any = {};
	let loading = false;
	let completed = false;
	async function submitFeedBack() {
		try {
			loading = true;
			setTimeout(async () => {
				const res = await createFeedback(data);
				loading = false;
				completed = true;
			}, 2000);
		} catch (error) {
			console.log(error);
		}
	}

	onMount(async () => {
		await submitFeedBack();
	});

    onDestroy(() => {
        completed = false
        activeStep.set(0)
    })
</script>

<div class="flex flex-col items-center justify-center sm:min-h-[450px]">
	{#if loading}
		<Loader />
	{:else if completed}
		<div><Icon icon="ph:seal-check-duotone" class="text-center text-8xl text-green-600" /></div>
		<div class="py-4 text-center text-sm font-semibold text-gray-500">
			Thanks for your feedback.
		</div>
		<Button
			type="button"
			on:click={() => {
				goto('/');
			}}
		>
			Back to Home
		</Button>
	{:else}
		<div class="text-center font-semibold text-gra-500">Something went wrong {':('}</div>
	{/if}
</div>
