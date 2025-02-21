<script lang="ts">
	import SlideOver from '$lib/components/layout/slideOver.svelte';
	import { Button, Modal } from 'flowbite-svelte';
  import gra_logo from '$static/assets/gra-logo.webp';
	import { text } from '@sveltejs/kit';
	import { goto } from '$app/navigation';
	import { createEventDispatcher } from 'svelte';
	import logo from '$static/assets/coa.svg';
	import BreadCrumbs from '$lib/components/ui/breadCrumb.svelte';

	let showPanel = false;
  let breadCrumbsOptions: any = [
		{ id: 1, label: 'Services', path: '/services' },
		{ id: 2, label: 'GRA', path: '/services/gra' }
	];

	function navigate(event: CustomEvent) {
		return;
	}
  const dispatch = createEventDispatcher();
	async function togglePanel() {
		showPanel = true;
	}
	function closePanel() {
		showPanel = false;
	}

  let showAlertModal = false

  function goToGra () {
    showAlertModal = false;
    window.open('https://taxpayersportal.com', '_blank')
  }
  let options = [
    {
      label: 'Pay Domestic Tax Bill',
      onclick: () => {
        goto('/services/gra/tax-bill')
      },
      // to: '/services/gra/pay-domestic-tax-bill'
    },
    {
      label: 'File Returns & Pay Taxes',
      onclick: () => {
        showAlertModal = true
      },
    },
    {
      label: 'Pay Vehicle Income Tax (VIT)',
      onclick: () => {
        goto('/services/gra/vit')
      },
    },
    {
      label: 'Pay Emission Levy',
      onclick: () => {
        goto('/services/gra/emission-levy')
      },
    },
    {
      label: 'Pay Customs Duty',
      onclick: () => {
        goto('/services/gra/customs-duty')
      },
    }
  ]
</script>
<BreadCrumbs options={breadCrumbsOptions} on:navigate={navigate} />

			<main class="isolate">
				<div class="">
					<div class="mx-auto max-w-2xl space-y-4 lg:mx-0">
						<div>
							<h2
								class="mt-4 text-pretty text-2xl font-semibold tracking-tight text-gray-900 sm:text-2xl"
							>
								Our Vision
							</h2>
							<p class="tex mt-2 text-gray-600">
								To be a world-class revenue administration recognized for professionalism, integrity
								and excellence.
							</p>
						</div>
						<div>
							<h2
								class="mt-4 text-pretty text-2xl font-semibold tracking-tight text-gray-900 sm:text-2xl"
							>
								Our Mission
							</h2>
							<p class="tex mt-2 text-gray-600">
								To mobilize revenue for national development in a transparent, fair, effective and
								efficient manner.
							</p>
						</div>
						<div>
							<h2
								class="mt-4 text-pretty text-2xl font-semibold tracking-tight text-gray-900 sm:text-2xl"
							>
								Values
							</h2>

							<ul class="list-disc md:pl-10">
								<li class="tex mt-2 text-gray-600">Integrity - be fair and honest</li>
								<li class="tex mt-2 text-gray-600">
									Fairness - provide consistent and standardised service
								</li>
								<li class="tex mt-2 text-gray-600">
									Service - provide timely and accurate responses when dealing with our customers
									using channels of their choice
								</li>
								<li class="tex mt-2 text-gray-600">
									Teamwork - work together to achieve our goals
								</li>
								<li class="tex mt-2 text-gray-600">
									Innovation - build a culture that readily adapts to change in the Operating
									environment
								</li>
								<li class="tex mt-2 text-gray-600">
									Professionalism - apply the requisite knowledge, skills and abilities to meet
									stakeholder expectations
								</li>
							</ul>
						</div>
					</div>
				</div>

				<!-- Logo cloud -->
				<div class="relative isolate -z-10 mt-20">
					<div
						class="absolute inset-x-0 top-1/2 -z-10 flex -translate-y-1/2 justify-center overflow-hidden [mask-image:radial-gradient(50%_45%_at_50%_55%,white,transparent)]"
					>
						<svg class="h-[40rem] w-[80rem] flex-none stroke-gray-200" aria-hidden="true">
							<defs>
								<pattern
									id="e9033f3e-f665-41a6-84ef-756f6778e6fe"
									width="200"
									height="200"
									x="50%"
									y="50%"
									patternUnits="userSpaceOnUse"
									patternTransform="translate(-100 0)"
								>
									<path d="M.5 200V.5H200" fill="none" />
								</pattern>
							</defs>
							<svg x="50%" y="50%" class="overflow-visible fill-gray-50">
								<path d="M-300 0h201v201h-201Z M300 200h201v201h-201Z" stroke-width="0" />
							</svg>
							<rect
								width="100%"
								height="100%"
								stroke-width="0"
								fill="url(#e9033f3e-f665-41a6-84ef-756f6778e6fe)"
							/>
						</svg>
					</div>
					<div class="mx-auto max-w-7xl px-6 lg:px-8">
						<p class="text-center text-gray-900">
							The Ghana Revenue Authority (GRA) was established in 2009 as a merger of the three
							revenue agencies, the Customs, Excise and Preventive Service (CEPS), the Internal
							Revenue Service (IRS), the Value Added Tax Service (VATS) and the Revenue Agencies
							Governing Board (RAGB) in accordance with the Ghana Revenue Authority Act 2009, (Act
							791). Our core mandate is to ensure maximum compliance with all relevant laws in order
							to ensure a sustainable revenue stream for government, trade facilitation and a
							controlled and safe flow of goods across the country’s borders. The Authority is
							headed by the Commissioner-General, with support from three (3) Commissioners in
							charge of the following divisions; Domestic Tax Revenue Division (DTRD) Customs
							Division (CD) Support Services Division (SSD)
						</p>
						
						
					</div>
				</div>

			</main>

<div class="w-full flex justify-center sm:justify-end">
  <Button
  on:click={() => togglePanel()}
  class="z-40 cursor-pointer mt-6 rounded-sm bg-indigo-600"
  >File &amp; Pay Taxes</Button
>
</div>
<div class="fixed z-[3000]">
	<SlideOver title="" show={showPanel} onClose={closePanel}>
    <div>
      <img src={gra_logo} alt="GRA" class="h-20 mx-auto w-auto" />
    </div>
		<div class="p-2 text-center text-sm font-medium text-gray-600">Choose an option to proceed</div>
		<ul role="list" class="w-full divide-y divide-gray-100">
      {#each options as o, i}
      <li>
			<button type="button" on:click={() => o.onclick()} class="relative w-full flex justify-between gap-x-6 px-4 py-5 hover:bg-gray-100 sm:px-6 lg:px-8">
				<div class="flex min-w-0 gap-x-4">
					
					<div class="min-w-0 flex-auto">
						<p class="text-sm/6 font-semibold text-gray-900">
							<a href="#">
								<span class="absolute inset-x-0 -top-px bottom-0"></span>
								{o.label}
							</a>
						</p>
						
					</div>
				</div>
				<div class="flex shrink-0 items-center gap-x-4">
					
					<svg
						class="size-5 flex-none text-gray-400"
						viewBox="0 0 20 20"
						fill="currentColor"
						aria-hidden="true"
						data-slot="icon"
					>
						<path
							fill-rule="evenodd"
							d="M8.22 5.22a.75.75 0 0 1 1.06 0l4.25 4.25a.75.75 0 0 1 0 1.06l-4.25 4.25a.75.75 0 0 1-1.06-1.06L11.94 10 8.22 6.28a.75.75 0 0 1 0-1.06Z"
							clip-rule="evenodd"
						/>
					</svg>
				</div>
			</button>
    </li>
			{/each}
		</ul>
	</SlideOver>
</div>


<div class="fixed z-[3100]">
  <Modal class="" open={showAlertModal} on:close={() => dispatch('cancel')} size="sm">
    <img src={logo} class="h-8 mx-auto flex items-center justify-center sm:h-16" alt="Flowbite Logo" />

    <div class="text-center py-6">You will be redirected to the official GRA Taxpayers' Portal to file returns and pay taxes</div>

    <div class="flex justify-center">
      <Button color="dark" on:click={() => goToGra()} class="py-3">Continue</Button>
    </div>
  </Modal>
  </div>