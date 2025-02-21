<script lang="ts">
	import Form from '$lib/components/forms/form.svelte';
	import { z } from 'zod';
	import TextField from '$lib/components/forms/textField.svelte';
	import Button from '$lib/components/ui/button.svelte';
	import { activeStep } from './feedbackStore';
	import SelectField from '$lib/components/forms/selectField.svelte';
	import { Checkbox, Radio } from 'flowbite-svelte';
	import Icon from '@iconify/svelte';
	import { getCurrentLocation } from '$lib/utils/geolocation';
	import DateField from '$lib/components/forms/dateField.svelte';
	// import DateField from '$lib/components/forms/dateField.svelte';

	let init = {
		streetAddress: '',
		date: ''
	};

	let disableFields = false;
	let selected = 'selected';
	let error: string | null = null;
	let isAutoLocation = false;
	const schema = z.object({
		// date: z.date(),
		streetAddress: z.string().min(1, 'Required')
	});

	function handleSchema () {
		if (disableFields) {
			return z.object({})
		} else {
			return schema
		}
	}

	const submit = async ({ detail }: any) => {
		activeStep.set(3);
	};

	async function handleLocationToggle(event: CustomEvent) {
		if (event.detail) {
			try {
				const location = await getCurrentLocation();
				console.log('Location:', location);
			} catch (err: any) {
				error = err.error;
				disableFields = false;
			} finally {
			}
		}
	}
</script>

<Form {init} schema={handleSchema()} on:submit={submit}>
	<div class="mx-auto max-w-3xl space-y-12">
		<!-- <div class="mx-auto grid grid-cols-1 gap-x-8 gap-y-10 border-b border-gray-900/10 pb-12"> -->
		<!-- <div>
				<h2 class="text-base/7 font-semibold text-gray-900">Details</h2>
				<p class="mt-1 text-sm/6 text-gray-600">
					This information will be displayed publicly so be careful what you share.
				</p>
			</div> -->
		<div
			class="mx-auto grid w-full max-w-4xl grid-cols-1 gap-x-8 border-b border-gray-900/10 pb-12 sm:grid-cols-2"
		>
			<!-- <label for="about" class="block text-sm/6 font-medium text-gray-900">Description</label> -->
			<SelectField disabled={disableFields} showLabel label="Region" name="region" id="region" />
			<SelectField disabled={disableFields} showLabel label="City" name="city" id="city" />

			<div class="col-span-2">
				<TextField
					disabled={disableFields}
					showLabel
					label="Street Address"
					name="streetAddress"
					id="street"
					otherClasses="block col-span-2 w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
				/>
			</div>
			<div class="col-span-2">
				<TextField
					disabled={disableFields}
					showLabel
					label="Ghana Post GPS"
					name="streetAddress"
					id="street"
					otherClasses="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
				/>
			</div>
			<div class="col-span-2 text-center">OR</div>
			<div
				class="col-span-2 mx-auto mt-4 w-full rounded-sm border border-gray-200 sm:w-1/2 dark:border-gray-700"
			>
				<Checkbox
					bind:checked={disableFields}
					on:change={() => handleLocationToggle}
					class="flex w-full items-center justify-center p-4"
					>Use current location <Icon icon="iconamoon:location" class="ml-1 h-5 w-5" /></Checkbox
				>
			</div>
			<div class="col-span-2">
				<DateField name="date" label="Date" placeholder="Pick date" />
			</div>
		</div>

		<!-- </div> -->
		<div class="flex w-full items-center justify-end gap-x-4">
			<Button on:click={() => --$activeStep} type="button" otherClasses="py-3">Previous</Button>
			<Button type="submit" otherClasses="w-1/5 bg-green-800 hover:bg-green-700 py-3 text-white">
				Finish and submit
			</Button>
		</div>
	</div>
</Form>
