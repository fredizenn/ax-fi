<script lang="ts">
	import coa from '$static/assets/coa.svg';
	import Icon from '@iconify/svelte';
	import { Avatar, Button } from 'flowbite-svelte';
	import SignUp from '$modules/auth/signup/index.svelte';
	import LoginForm from './loginForm.svelte';
	import { goto } from '$app/navigation';
	let signInWithEmail = true;
	let signInWithPhone = false;
	let isSignUp = false;
</script>

<div class="flex flex-col justify-center px-6 py-12 lg:px-8">
	<div class="sm:mx-auto sm:w-full sm:max-w-sm">
		<img class="mx-auto h-24 w-auto" src={coa} alt="Your Company" />
		<h2 class="mt-6 text-center text-2xl/9 font-bold tracking-tight text-gray-900">
			{#if !isSignUp}Sign in to your account{:else}Get registered now{/if}
		</h2>
	</div>

	<div class="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
		{#if !isSignUp}
			<LoginForm {signInWithEmail} />
		{:else}
			<SignUp />
		{/if}
		{#if !isSignUp}
			<div class=" py-6 text-center text-sm font-medium">Or sign in with</div>
			<button
				on:click={() => (signInWithEmail = !signInWithEmail)}
				type="button"
				class="mx-auto flex items-center justify-center rounded border-2 px-2 py-2.5"
			>
				{#if signInWithEmail}
					<Icon icon="fluent:phone-16-regular" class="h-7 w-7" />
				{:else}
					<Icon icon="formkit:email" class="h-7 w-7" />
				{/if}
			</button>

			<p class="mt-4 text-center text-sm/6 text-gray-500">
				Not registered yet?
				<button
					on:click={() => goto('/auth/signup')}
					class="font-medium text-indigo-600 hover:text-indigo-500">Sign up</button
				>
			</p>
		{:else}
			<div class=" py-6 text-center text-sm font-medium">OR</div>
			<Button color="alternative" type="button" class="mx-auto flex items-center justify-center">
				Sign Up with Ghana Card
			</Button>

			<!-- <p class="mt-4 text-center text-sm/6 text-gray-500">
				Already have an account?
				<button
					on:click={() => (isSignUp = false)}
					class="font-medium text-indigo-600 hover:text-indigo-500">Sign in</button
				>
			</p> -->
		{/if}
	</div>
</div>
