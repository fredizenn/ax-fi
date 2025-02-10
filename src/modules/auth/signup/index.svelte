<script lang="ts">
	import coa from '$static/assets/coa.svg';
	import { Button } from 'flowbite-svelte';
	import Form from '$lib/components/forms/form.svelte';
	import TextField from '$lib/components/forms/textField.svelte';
	import { z } from 'zod';
	import Icon from '@iconify/svelte';
	import Verification from './verification.svelte';
	import GhanaCard from './ghanaCard.svelte';

	export let isValid = false;
	let activePage = 0;
	const submit = () => {
		activePage += 1;
		return true;
	};
	let form: any;
	let initialValues = {
		firstName: '',
		lastName: '',
		otherNames: '',
		phoneNumber: '',
		email: '',
		password: '',
		terms: false
	};

	const schema = z.object({
		firstName: z.string().min(1, 'Required'),
		lastName: z.string().min(1, 'Required'),
		otherNames: z.string().optional(),
		phoneNumber: z.string().min(10, 'Required'),
		email: z.string().email().min(1, 'Required'),
		password: z.string().min(1, 'Required')
	});

	function onChange({ detail }: CustomEvent) {
		const { values, form } = detail;
		form.isValid.subscribe((val: boolean) => {
			isValid = val;
		});
	}
</script>

{#if activePage === 0}
	<div class="mx-auto flex max-w-4xl flex-col justify-center rounded px-6 py-12 shadow lg:px-8">
		<div class="sm:mx-auto sm:w-full sm:max-w-sm">
			<img class="mx-auto h-24 w-auto" src={coa} alt="Your Company" />
			<h2 class="mt-2 text-center text-2xl/9 font-medium tracking-tight text-gray-900">
				Get registered now
			</h2>
		</div>

		<div class="mt-10 sm:mx-auto sm:w-full sm:max-w-2xl">
			<Form {schema} init={initialValues} on:change={onChange} on:submit={submit}>
				<div class="grid-cols-2 gap-x-4 gap-y-8 md:grid">
					<TextField showLabel label="First Name" name="firstName" required />
					<TextField showLabel label="Last Name" name="lastName" required />
					<TextField showLabel label="Other Names" name="otherNames" />
					<TextField showLabel label="Phone Number" name="phoneNumber" required />
					<TextField showLabel label="Email" name="email" required />
					<TextField showLabel type="password" label="Password" name="password" required />
				</div>
				<div>
					<Button
						type="submit"
						class="mt-10 flex w-full justify-center rounded-md bg-green-800 py-3">Proceed</Button
					>
				</div>
			</Form>

			<div class=" py-6 text-center text-sm font-medium">OR</div>
			<Button
				on:click={() => (activePage = 2)}
				color="alternative"
				type="button"
				class="mx-auto flex items-center justify-center"
			>
				Sign Up with Ghana Card <Icon icon="openmoji:flag-ghana" class="ml-2 h-7 w-7" />
			</Button>

			<!-- <p class="mt-4 text-center text-sm/6 text-gray-500">
				Already have an account?
				<button class="font-medium text-indigo-600 hover:text-indigo-500">Sign in</button>
			</p> -->
		</div>
	</div>
{:else if activePage === 1}
	<div class="bg-white py-16 sm:py-24 lg:py-32">
		<div class="mx-auto max-w-7xl px-6 lg:px-8">
			<button on:click={() => (activePage = 0)} class="py-6 text-3xl font-bold">&larr;</button>

			<Verification />
		</div>
	</div>
{:else if activePage === 2}
	<div class="bg-white py-16 sm:py-24 lg:py-32">
		<div class="mx-auto max-w-7xl px-6 lg:px-8">
			<button on:click={() => (activePage = 0)} class="py-6 text-3xl font-bold">&larr;</button>

			<GhanaCard />
		</div>
	</div>
{:else}
	<div class="text-center">An error occurred</div>
{/if}
