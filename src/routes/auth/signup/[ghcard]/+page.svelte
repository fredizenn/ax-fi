<script lang="ts">
	import { goto } from '$app/navigation';
	import { page } from '$app/stores';
	import Button from '$lib/components/ui/button.svelte';
	import Loader from '$lib/components/ui/loader.svelte';
	import { extractGhanaCardDetails, signUp } from '$svc/auth';
	import { onMount } from 'svelte';

	let busy = false;
  let loading = false;

	const loadDetails = async () => {
		busy = true;
		setTimeout(async () => {
			await extractGhanaCardDetails($page.params.ghcard);
			busy = false;
		}, 2000);
	};

  const submit = async () => {
    loading = true;
    setTimeout(async () => {
			await signUp({});
      goto('/dashboard')
			loading = false;
		}, 2000);
  }

	onMount(async () => {
		await loadDetails();
	});
</script>

{#if busy}
<div class="sm:min-h-[800px] min-h-[400px] flex items-center justify-center">
  <Loader />
</div>
{:else}
<div class="mx-auto my-10 w-full sm:max-w-3xl">
  <a href='/auth/signup/' class="text-sm flex items-center hover:text-gray-700 py-4">&larr; Change Ghana Card number</a>
	<div class="flex items-center justify-between">
		<div class="px-4 sm:px-0">
			<h3 class="text-2xl font-semibold text-gray-900">{$page?.params?.ghcard}</h3>
			<p class="mt-1 max-w-2xl text-xs text-gray-500">
				Details retrieved from Ghana Card number provided above.
			</p>
		</div>
		<div class="">
			<Button
				disabled={loading}
				busy={loading}
				type="button"
        on:click={() => submit()}
				otherClasses="flex-none hover:bg-green-700 rounded-md text-white bg-green-800"
				>Confirm and Sign up</Button
			>
		</div>
	</div>

	<div class="mt-6 border-t border-gray-100">
		<dl class="divide-y divide-gray-100">
			<div class="px-4 py-6 sm:grid bg-gray-50 sm:grid-cols-3 sm:gap-4 sm:px-2">
				<dt class="text-sm/6 font-medium text-gray-900">Surname</dt>
				<dd class="mt-1 text-sm/6 text-gray-700 sm:col-span-2 sm:mt-0">Boafo</dd>
			</div>
			<div class="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-2">
				<dt class="text-sm/6 font-medium text-gray-900">First names</dt>
				<dd class="mt-1 text-sm/6 text-gray-700 sm:col-span-2 sm:mt-0">Kwaku</dd>
			</div>
			<div class="px-4 py-6 sm:grid bg-gray-50 sm:grid-cols-3 sm:gap-4 sm:px-2">
				<dt class="text-sm/6 font-medium text-gray-900">Nationality</dt>
				<dd class="mt-1 text-sm/6 text-gray-700 sm:col-span-2 sm:mt-0">Ghanaian</dd>
			</div>
			<div class="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-2">
				<dt class="text-sm/6 font-medium text-gray-900">Date of Birth</dt>
				<dd class="mt-1 text-sm/6 text-gray-700 sm:col-span-2 sm:mt-0">31/02/1998</dd>
			</div>
			<div class="px-4 py-6 sm:grid bg-gray-50 sm:grid-cols-3 sm:gap-4 sm:px-2">
				<dt class="text-sm/6 font-medium text-gray-900">Document Number</dt>
				<dd class="mt-1 text-sm/6 text-gray-700 sm:col-span-2 sm:mt-0">AC8989834</dd>
			</div>
			<div class="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-2">
				<dt class="text-sm/6 font-medium text-gray-900">Place of Issuance</dt>
				<dd class="mt-1 text-sm/6 text-gray-700 sm:col-span-2 sm:mt-0">Accra</dd>
			</div>
			<div class="px-4 py-6 sm:grid bg-gray-50 sm:grid-cols-3 sm:gap-4 sm:px-2">
				<dt class="text-sm/6 font-medium text-gray-900">Date of Issuance</dt>
				<dd class="mt-1 text-sm/6 text-gray-700 sm:col-span-2 sm:mt-0">01/01/2019</dd>
			</div>
			<div class="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-2">
				<dt class="text-sm/6 font-medium text-gray-900">Date of Expiry</dt>
				<dd class="mt-1 text-sm/6 text-gray-700 sm:col-span-2 sm:mt-0">01/01/2029</dd>
			</div>
		</dl>
	</div>
</div>


{/if}