<script lang="ts">
	import { goto } from '$app/navigation';
	import Form from '$lib/components/forms/form.svelte';
	import TextField from '$lib/components/forms/textField.svelte';
	import Button from '$lib/components/ui/button.svelte';
	import { authenticated } from '$lib/stores/authStore';
	// import { authenticated } from '$lib/stores/authStore';
	import { login } from '$svc/auth';
	// import { Button } from 'flowbite-svelte';
	import { z } from 'zod';

	export let signInWithEmail = true;
    export let loading = false;
	const init = {
		email: '',
		phoneNumber: '',
		applicationNumber: ''
	};

	const schema = z.object({
		email: z.string().min(1, 'Required'),
		password: z.string().min(1, 'Required')
	});

    const altSchema = z.object({
		phoneNumber: z.string().min(1, 'Required'),
		password: z.string().min(1, 'Required')
	});

	const submit = async ({ detail }: any) => {
        loading = true
        setTimeout(() => {
            login({detail})
			authenticated.set(true)
            goto('/dashboard')
            loading = false

        }, 2000)
		return true;
	};


	$: console.log(signInWithEmail)
	// function subm
</script>

<Form schema={signInWithEmail ? schema : altSchema} {init} on:submit={submit}>
	<div class="grid-cols-1 gap-x-4 gap-y-0 md:grid">
		{#if signInWithEmail}
			<TextField showLabel label="Email" name="email" required />
		{:else}
			<TextField showLabel label="Phone Number" name="phoneNumber" required />
		{/if}
		<div class="w-full">
			<div class="text-right text-sm">
				<button type="button" class="text-xs font-medium text-indigo-600 hover:text-indigo-500"
					>Forgot password?</button
				>
			</div>
			<TextField type="password" showLabel label="Password" name="password" required />
		</div>
	</div>
	<div>
		<Button disabled={loading} busy={loading} type="submit" otherClasses="mt-6 flex w-full text-white justify-center hover:bg-green-700 rounded-md bg-green-800 py-2"
			>Sign in</Button
		>
	</div>
</Form>
