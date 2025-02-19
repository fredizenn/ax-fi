<script lang="ts">
	import { goto } from '$app/navigation';
	import Form from '$lib/components/forms/form.svelte';
	import TextField from '$lib/components/forms/textField.svelte';
	import Button from '$lib/components/ui/button.svelte';
	import { extractGhanaCardDetails } from '$svc/auth';
	import { z } from 'zod';

	let loading = false;
	const schema = z.object({
		ghanaCardNumber:  z.string().min(10, 'Required')
	})

	const submit = async ({detail}: any) => {
		loading = true
		setTimeout(async() => {
			goto(`/auth/signup/${detail.values.ghanaCardNumber}/`)
			loading = false;
		}, 2000)
	}
</script>

<h2 class="max-w-2xl text-balance text-3xl font-semibold tracking-tight text-gray-900 sm:text-4xl">
	Sign Up With Your Ghana Card Number
</h2>
<Form init={{ ghanaCardNumber: '' }} {schema} on:submit={submit}>
	<div class="mt-10 w-full sm:w-1/3">
		<div class="w-full gap-x-4">
			<label for="v-code" class="sr-only">Enter code here</label>
			<TextField
				name="ghanaCardNumber"
				type="text"
				required
				otherClasses="w-full min-w-0 flex-auto rounded-md bg-white px-3.5 py-4 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
				placeholder="GHA-000000000-9"
			/>
		</div>
		<Button
			disabled={loading}
			busy={loading}
			type="submit"
			otherClasses="w-full flex-none hover:bg-green-700 rounded-md text-white bg-green-800"
			>Proceed</Button
		>
	</div>
</Form>
