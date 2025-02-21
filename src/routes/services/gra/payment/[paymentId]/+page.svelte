<script lang="ts">
	import { page } from '$app/stores';
	import BreadCrumbs from '$lib/components/ui/breadCrumb.svelte';
	import Icon from '@iconify/svelte';
	import { Dropdown, DropdownItem, Modal, Radio } from 'flowbite-svelte';
	import { createEventDispatcher } from 'svelte';
    import qrCode from '$static/assets/qrCode.png';
    import Loader from '$lib/components/ui/loader.svelte';
    function navigate(event: CustomEvent) {
		return;
	}

    let showModal = false;
    let loadingQrCode = false;

    function loadQrCode () {
        loadingQrCode = true
        setTimeout(() => {
            loadingQrCode = false
        }, 2000)
    }

    let mobileMoneyOption = 'MTN'

	let breadCrumbsOptions: any = [
		{ id: 1, label: 'Services', path: '/' },
		{ id: 2, label: 'GRA', path: '/services/gra' },
		{ id: 3, label: 'Pay Domestic Tax Bill', path: '/services/gra/tax-bill' },
		{ id: 4, label: 'Checkout', path: `/services/gra/tax-bill/${$page.params.paymentId}` }
	];

    const dispatch = createEventDispatcher()
</script>

<BreadCrumbs options={breadCrumbsOptions} on:navigate={navigate} />

<!-- <div class="bg-gray-900 py-24 sm:py-32"> -->
    <div class="mx-auto lg:max-w-7xl ">
      <p class="mt-6 max-w-lg text-pretty text-xl font-semibold tracking-tight text-black">Complete payment</p>
      <div class="mt-4 grid grid-cols-1 gap-4 lg:grid-cols-6 lg:grid-rows-2">
        <div class="flex shadow p-px lg:col-span-4">
          <div class="overflow-hidden rounded-sm  ring-1 ring-white/15">
            <!-- <img class="h-80 object-cover object-left" src="https://tailwindui.com/plus-assets/img/component-images/bento-02-releases.png" alt=""> -->
            <div class="p-10">
              <h3 class="text-sm/4 font-semibold text-gray-400">Releases</h3>
              <p class="mt-2 max-w-lg text-sm/6 text-gray-400">Lorem ipsum dolor sit amet, consectetur adipiscing elit. In gravida justo et nulla efficitur, maximus egestas sem pellentesque.</p>
            </div>
          </div>
        </div>
        <div class="flex shadow py-6 px-4 lg:col-span-2">
          <div class="overflow-hidden w-full ring-1 ring-white/15">
            <div class="w-full">
                <div class="text-sm/4 font-semibold text-gray-400">Payment Methods</div>
                    <ul role="list" class="divide-y divide-gray-100">
                        <button type="button" class="w-full text-left relative py-5 hover:bg-gray-50">
                          <div class="px-4 sm:px-2 lg:px-2">
                            <div class="mx-auto flex max-w-4xl justify-between gap-x-6">
                              <div class="flex min-w-0 gap-x-4">
                                <div class="min-w-0 flex-auto">
                                  <div class="text-sm/6 font-semibold text-gray-900">
                                    <div>
                                      <span class="absolute inset-x-0 -top-px bottom-0"></span>
                                      Mobile Money
                                    </div>
                                </div>
                                  <p class="mt-1 flex text-xs/5 text-gray-500">
                                    <a href="mailto:leslie.alexander@example.com" class="relative truncate hover:underline">Pay via mobile money</a>
                                  </p>
                                </div>
                              </div>
                              <div class="flex shrink-0 items-center gap-x-4">
                                <Icon icon="stash:chevron-down-duotone" class="w-6 h-6" />
                              </div>
                            </div>
                          </div>
                        </button>
                        <Dropdown>
                            <ul class="w-48 bg-white rounded-lg dark:bg-gray-800 dark:border-gray-600 divide-y divide-gray-200 dark:divide-gray-600">
                                <li><Radio class="p-3" bind:group={mobileMoneyOption} value="mtn">MTN Mobile Money</Radio></li>
                                <li><Radio class="p-3" bind:group={mobileMoneyOption} value="at">AT Cash</Radio></li>
                                <li><Radio class="p-3" bind:group={mobileMoneyOption} value="tcash">T Cash</Radio></li>
                              </ul>
                          </Dropdown>
                          <button type="button" class="w-full text-left relative py-5 hover:bg-gray-50">
                            <div class="px-4 sm:px-2 lg:px-2">
                              <div class="mx-auto flex max-w-4xl justify-between gap-x-6">
                                <div class="flex min-w-0 gap-x-4">
                                  <div class="min-w-0 flex-auto">
                                    <div class="text-sm/6 font-semibold text-gray-900">
                                      <div>
                                        <span class="absolute inset-x-0 -top-px bottom-0"></span>
                                        Bank deposit
                                      </div>
                                  </div>
                                    <p class="mt-1 flex text-xs/5 text-gray-500">
                                      <a href="mailto:leslie.alexander@example.com" class="relative truncate hover:underline">Pay at the bank</a>
                                    </p>
                                  </div>
                                </div>
                                <!-- <div class="flex shrink-0 items-center gap-x-4">
                                  <Icon icon="stash:chevron-down-duotone" class="w-6 h-6" />
                                </div> -->
                              </div>
                            </div>
                          </button>
                          <button onclick={() => {showModal = true; loadQrCode()}} type="button" class="w-full text-left relative py-5 hover:bg-gray-50">
                            <div class="px-4 sm:px-2 lg:px-2">
                              <div class="mx-auto flex max-w-4xl justify-between gap-x-6">
                                <div class="flex min-w-0 gap-x-4">
                                  <div class="min-w-0 flex-auto">
                                    <div class="text-sm/6 font-semibold text-gray-900">
                                      <div>
                                        <span class="absolute inset-x-0 -top-px bottom-0"></span>
                                        QR Code
                                      </div>
                                  </div>
                                    <p class="mt-1 flex text-xs/5 text-gray-500">
                                      <a href="mailto:leslie.alexander@example.com" class="relative truncate hover:underline">Scan a QR Code</a>
                                    </p>
                                  </div>
                                </div>
                                <!-- <div class="flex shrink-0 items-center gap-x-4">
                                  <Icon icon="stash:chevron-down-duotone" class="w-6 h-6" />
                                </div> -->
                              </div>
                            </div>
                          </button>
                      </ul>                  
              <p class="mt-2 font-medium text-center tracking-tight text-gray-600 text-xs">Select preferred payment method</p>
            </div>
          </div>
        </div>
        
      </div>
    </div>
  <!-- </div> -->
  
<div class="fixed z-[3100]">
<Modal title="Scan QR Code" class="" open={showModal} on:close={() => dispatch('cancel')} size="sm">
    
	<div class="p-10 mx-auto ">
        {#if loadingQrCode}
            <Loader />
        {:else}
            <img src={qrCode} class="w-48 mx-auto h-48" alt="qrCode" />
        {/if}
    </div>
</Modal>
</div>
  
