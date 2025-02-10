<script lang="ts">
	import BreadCrumbs from '$lib/components/ui/breadCrumb.svelte';

	let breadCrumbsOptions: any = [
		{ id: 1, label: 'Services', path: '/' },
		{ id: 2, label: 'GRA', path: '/services/gra' },
        { id: 3, label: 'Vehicle Income Tax', path: '/services/gra/vit' }
	];

	function navigate(event: CustomEvent) {
		return;
	}
</script>

<BreadCrumbs options={breadCrumbsOptions} on:navigate={navigate} />

<div class="w-full flex flex-col align-middle mx-auto">
      <h2 class="mt-4 max-w-2xl text-balance text-3xl font-medium tracking-tight text-gray-900 sm:text-4xl">Pay Vehicle Income Tax</h2>
      <form class="mt-10 max-w-md">
        <div class="flex gap-x-4">
          <label for="email-address" class="sr-only">Enter Vehicle Numbers</label>
          <textarea id="email-address" name="email"  autocomplete="email" required class="min-w-0 flex-auto rounded-md bg-white px-3.5 py-4 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6" placeholder="Enter Vehicle Identification Numbers..." />
        </div>
        <button type="submit" class="mt-4 w-full flex-none rounded-sm bg-green-800 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-green-800">Submit</button>

      </form>
    </div>
  