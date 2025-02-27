<script lang="ts">
	import { goto } from '$app/navigation';
	import Form from '$lib/components/forms/form.svelte';
	import TextField from '$lib/components/forms/textField.svelte';
	import Button from '$lib/components/ui/button.svelte';
	import Loader from '$lib/components/ui/loader.svelte';
	import { authenticated } from '$lib/stores/authStore';
	import { verifyPhoneNumber } from '$svc/auth';
	// import { authenticated } from '$lib/stores/authStore';
	import { z } from 'zod';

	const schema = z.object({
		otp: z.string().min(1, 'Required')
	});

	let loading = false;

	const submit = async ({ detail }: any) => {
		loading = true;
		setTimeout(async () => {
			await verifyPhoneNumber(detail.values.otp);
			authenticated.set(true);
			goto('/dashboard');
			loading = false;
		}, 2000);
	};
</script>

<h2 class="max-w-2xl text-balance text-3xl font-semibold tracking-tight text-gray-900 sm:text-4xl">
	Enter Verification Code to verify your phone number
</h2>
<Form init={{ otp: '' }} {schema} on:submit={submit}>
	<div class="mt-10 w-full sm:w-1/3">
		<div class="w-full gap-x-4">
			<label for="v-code" class="sr-only">Enter code here</label>
			<TextField
				name="otp"
				type="text"
				required
				otherClasses="w-full min-w-0 flex-auto rounded-md bg-white px-3.5 py-4 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
				placeholder="Enter code here"
			/>
		</div>
		<Button
			disabled={loading}
			busy={loading}
			type="submit"
			otherClasses="w-full flex-none hover:bg-green-700 rounded-md text-white bg-green-800"
			>Verify</Button
		>
	</div>
</Form>

<p class="mt-4 text-sm/6 text-gray-900">
	Did not receive a verification code?<a
		href="#"
		class="font-semibold text-indigo-600 hover:text-indigo-500">resend</a
	>.
</p>
