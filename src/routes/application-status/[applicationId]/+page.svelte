<script lang="ts">
    import { page } from '$app/stores'
	import { extractQueryParam } from '$lib/utils';
	import { trackApplication } from '$svc/applications';
	import { onMount } from 'svelte';
    import Loader from '$lib/components/ui/loader.svelte';
    const applicationId = $page.params.applicationId

    let loading = false;

    async function getApplication () {
        loading = true;
        setTimeout(async() => {
            await trackApplication(applicationId, extractQueryParam(window.location.search, 'phoneNumber'))
            loading = false;
        }, 2000)
    }

    onMount(async() => {
        await getApplication()
    })
</script>

{#if loading}
	<div class="flex min-h-[400px] items-center justify-center sm:min-h-[400px]">
		<Loader />
	</div>
{:else}
	<div class="mx-auto my-12 max-w-3xl">
		<a href="/application-status" class="text-2xl font-semibold">&larr;</a>
		<div class="py-2 text-xl font-medium">Application Status Tracking</div>
		<div class="pb-4 text-sm text-gray-500">Application number: {applicationId}</div>

		<ul role="list" class="space-y-6">
			<li class="relative flex gap-x-4">
				<div class="absolute -bottom-6 left-0 top-0 flex w-6 justify-center">
					<div class="w-px bg-gray-200"></div>
				</div>
				<div class="relative flex size-6 flex-none items-center justify-center bg-white">
					<div class="size-1.5 rounded-full bg-green-400 ring-1 ring-green-500"></div>
				</div>
				<p class="flex-auto py-0.5 text-xs/5 text-gray-500">
					<span class="font-medium text-gray-900">Application sent</span>
				</p>
				<time datetime="2023-01-23T10:32" class="flex-none py-0.5 text-xs/5 text-gray-500"
					>7d ago</time
				>
			</li>
			<li class="relative flex gap-x-4">
				<div class="absolute -bottom-6 left-0 top-0 flex w-6 justify-center">
					<div class="w-px bg-gray-200"></div>
				</div>
				<div class="relative flex size-6 flex-none items-center justify-center bg-white">
					<div class="size-1.5 rounded-full bg-green-400 ring-1 ring-green-500"></div>
				</div>
				<p class="flex-auto py-0.5 text-xs/5 text-gray-500">
					<span class="font-medium text-gray-900">Application approved</span>
				</p>
				<time datetime="2023-01-23T11:03" class="flex-none py-0.5 text-xs/5 text-gray-500"
					>6d ago</time
				>
			</li>
			<li class="relative flex gap-x-4">
				<!-- <div class="absolute -bottom-6 left-0 top-0 flex w-6 justify-center">
            <div class="w-px bg-gray-200"></div>
          </div> -->
				<div class="relative flex size-6 flex-none items-center justify-center bg-white">
					<div class="size-1.5 rounded-full bg-amber-400 ring-1 ring-amber-500"></div>
				</div>
				<p class="flex-auto py-0.5 text-xs/5 text-gray-500">
					<span class="font-medium text-gray-900">Processing</span>
				</p>
				<time datetime="2023-01-23T11:24" class="flex-none py-0.5 text-xs/5 text-gray-500"
					>6d ago</time
				>
			</li>
			<!-- <li class="relative flex gap-x-4">
          <div class="absolute -bottom-6 left-0 top-0 flex w-6 justify-center">
            <div class="w-px bg-gray-200"></div>
          </div>
          <img src="https://images.unsplash.com/photo-1550525811-e5869dd03032?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt="" class="relative mt-3 size-6 flex-none rounded-full bg-gray-50">
          <div class="flex-auto rounded-md p-3 ring-1 ring-inset ring-gray-200">
            <div class="flex justify-between gap-x-4">
              <div class="py-0.5 text-xs/5 text-gray-500"><span class="font-medium text-gray-900">Chelsea Hagon</span> commented</div>
              <time datetime="2023-01-23T15:56" class="flex-none py-0.5 text-xs/5 text-gray-500">3d ago</time>
            </div>
            <p class="text-sm/6 text-gray-500">Called client, they reassured me the invoice would be paid by the 25th.</p>
          </div>
        </li>
        <li class="relative flex gap-x-4">
          <div class="absolute -bottom-6 left-0 top-0 flex w-6 justify-center">
            <div class="w-px bg-gray-200"></div>
          </div>
          <div class="relative flex size-6 flex-none items-center justify-center bg-white">
            <div class="size-1.5 rounded-full bg-gray-100 ring-1 ring-gray-300"></div>
          </div>
          <p class="flex-auto py-0.5 text-xs/5 text-gray-500"><span class="font-medium text-gray-900">Alex Curren</span> viewed the invoice.</p>
          <time datetime="2023-01-24T09:12" class="flex-none py-0.5 text-xs/5 text-gray-500">2d ago</time>
        </li>
        <li class="relative flex gap-x-4">
          <div class="absolute left-0 top-0 flex h-6 w-6 justify-center">
            <div class="w-px bg-gray-200"></div>
          </div>
          <div class="relative flex size-6 flex-none items-center justify-center bg-white">
            <svg class="size-6 text-indigo-600" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" data-slot="icon">
              <path fill-rule="evenodd" d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12Zm13.36-1.814a.75.75 0 1 0-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 0 0-1.06 1.06l2.25 2.25a.75.75 0 0 0 1.14-.094l3.75-5.25Z" clip-rule="evenodd" />
            </svg>
          </div>
          <p class="flex-auto py-0.5 text-xs/5 text-gray-500"><span class="font-medium text-gray-900">Alex Curren</span> paid the invoice.</p>
          <time datetime="2023-01-24T09:20" class="flex-none py-0.5 text-xs/5 text-gray-500">1d ago</time>
        </li> -->
		</ul>
	</div>
{/if}
