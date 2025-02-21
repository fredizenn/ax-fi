<script lang="ts">
	import BreadCrumbs from '$lib/components/ui/breadCrumb.svelte';
	import Form from '$lib/components/forms/form.svelte';
	import { string, z } from 'zod';
	import TextField from '$lib/components/forms/textField.svelte';
	import Button from '$lib/components/ui/button.svelte';
	import { createPayment } from '$svc/gra';
	import { goto } from '$app/navigation';
	let init = {
		taxBillId: ''
	};

  let loading = false;
	let breadCrumbsOptions: any = [
		{ id: 1, label: 'Services', path: '/' },
		{ id: 2, label: 'GRA', path: '/services/gra' },
		{ id: 3, label: 'Pay Domestic Tax Bill', path: '/services/gra/tax-bill' }
	];

	function navigate(event: CustomEvent) {
		return;
	}

	const schema = z.object({
		taxBillId: z.string().min(1, 'Required')
	});

	const submit = ({detail}: any) => {
    try {
      loading = true
      setTimeout(async() => {
        const res = await createPayment(detail.values)
        loading = false;
        goto(`/services/gra/payment/${detail.values.taxBillId}/?type=domestic`)
      }, 2000)
    } catch (e) {

    }
  };
</script>

<BreadCrumbs options={breadCrumbsOptions} on:navigate={navigate} />

<div class="mx-auto flex w-full flex-col align-middle">
	<h2
		class="mt-10 max-w-2xl text-balance text-xl font-medium tracking-tight text-gray-900 sm:text-4xl"
	>
		Pay Domestic Tax Bill
	</h2>
	<Form {schema} {init} on:submit={submit}>
		<div class="mt-6 flex w-full flex-col sm:max-w-xl">
			<div class="w-full gap-x-4">
				<TextField
					required
          name="taxBillId"
					otherClasses="w-full rounded-md bg-white px-3.5 sm:py-4 py-1.5 text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600"
					placeholder="Enter your Tax Bill Number"
				/>
			</div>
			<Button
        disabled={loading}
        busy={loading}
				type="submit"
				otherClasses="flex-none rounded-md bg-green-800 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-green-800"
				>Submit</Button
			>

			<p class="mt-4 text-sm/6 text-gray-900">
				Do not have a Tax Bill?<a
					href="https://taxpayersportal.com"
					target="_blank"
					class="font-semibold text-indigo-600 hover:text-indigo-500">{' '}Get Tax Bill</a
				>
			</p>
		</div>
	</Form>
</div>
