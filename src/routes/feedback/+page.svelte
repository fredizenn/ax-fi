
<script>
	import OptionsForm from './optionsForm.svelte';
	import FeedbackStepper from './feedbackStepper.svelte';
	import Button from '$lib/components/ui/button.svelte';
	import { activeStep } from './feedbackStore';
	import DetailsForm from './detailsForm.svelte';
    import LocationForm from "./locationForm.svelte";
	import Finish from './finish.svelte';

</script>

<div
	class="mx-auto my-10 flex w-full flex-col justify-center space-y-8 rounded px-6 py-6 shadow sm:max-w-5xl lg:px-8"
>
	<div class="mx-auto flex w-full justify-center align-middle">
		<FeedbackStepper />
	</div>
	{#if $activeStep === 0}
		<OptionsForm />
	{:else if $activeStep === 1}
        <DetailsForm />
    {:else if $activeStep === 2}
        <LocationForm />
    {:else if $activeStep === 3}
	<div class="flex min-h-[400px] items-center justify-center sm:min-h-[400px]">
		<Finish />
	</div>
    {/if}
	
</div>
