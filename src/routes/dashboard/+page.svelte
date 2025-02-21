<script lang="ts">
	import { toCurrencyFormat } from "$lib/utils";
    import Button from '$lib/components/ui/button.svelte'
	import { dashboardData } from "$svc/dashboard";
	import { onMount } from "svelte";
    import Loader from '$lib/components/ui/loader.svelte';
    let loading = false;
    let data = [
        {
            amount: 7600,
            tax: 500,
            title: 'Tax filing',
            description: 'Bills',
            invoiceNumber: '00012',
        },
        {
            amount: 8000,
            tax: 800,
            title: 'Tax filing',
            description: 'Bills',
            invoiceNumber: '00013'
        },
        {
            amount: 9000,
            tax: 900,
            title: 'Tax filing',
            description: 'Bills',
            invoiceNumber: '00014',
        },
        {
            amount: 7600,
            tax: 500,
            title: 'Tax filing',
            description: 'Bills',
            invoiceNumber: '00015'
        }
    ]

    const yesterdayData = [
        {
            amount: 10000,
            tax: 1000,
            title: 'Passport Application',
            description: 'Passport Office',
            invoiceNumber: '00010',
        },
    ]
    
    async function fetchData() {
        loading = true
        setTimeout(async() => {
            await dashboardData()
            loading = false
        }, 2000)
    }

    onMount(async() => {
        await fetchData()
    })
</script>
  
  <main class="w-full px-4 sm:px-44 lg:px-44 3xl:px-72 mx-auto">
    {#if loading}
    <div class="flex items-center justify-center h-[800px]">
        <Loader />
    </div>
       
    {:else}
    <div class="relative isolate overflow-hidden pt-16">
      <header class="pb-4 sm:pb-6">
        <div class="mx-auto flex flex-wrap items-center gap-6 sm:flex-nowrap">
          <h1 class="text-base/7 font-semibold text-gray-900">Overview</h1>
          <div class="order-last flex w-full gap-x-8 text-sm/6 font-semibold sm:order-none sm:w-auto sm:border-l sm:border-gray-200 sm:pl-6 sm:text-sm/7">
            <a href="#" class="text-indigo-600">Last 7 days</a>
            <a href="#" class="text-gray-700">Last 30 days</a>
            <a href="#" class="text-gray-700">All-time</a>
          </div>
          
          <Button leadingIcon="ic:round-plus" otherClasses="ml-auto flex items-center gap-x-1 rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">
            New Invoice
          </Button>
        </div>
      </header>
  
      <div class="border-b border-b-gray-900/10 lg:border-t lg:border-t-gray-900/5">
        <dl class="mx-auto grid w-full grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 lg:px-2 xl:px-0">
          <div class="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-2 border-t border-gray-900/5 py-10  lg:border-t-0 ">
            <dt class="text-sm/6 font-medium text-gray-500">Revenue</dt>
            <dd class="text-xs font-medium text-gray-700">+4.75%</dd>
            <dd class="w-full flex-none text-3xl/10 font-medium tracking-tight text-gray-900">{toCurrencyFormat(23998)}</dd>
          </div>
         
        </dl>
      </div>
  
      <div class="absolute left-0 top-full -z-10 mt-96 origin-top-left translate-y-40 -rotate-90 transform-gpu opacity-20 blur-3xl sm:left-1/2 sm:-ml-96 sm:-mt-10 sm:translate-y-0 sm:rotate-0 sm:transform-gpu sm:opacity-50" aria-hidden="true">
        <div class="aspect-[1154/678] w-[72.125rem] bg-gradient-to-br from-[#9cbcff] to-[#b4afff]" style="clip-path: polygon(100% 38.5%, 82.6% 100%, 60.2% 37.7%, 52.4% 32.1%, 47.5% 41.8%, 45.2% 65.6%, 27.5% 23.4%, 0.1% 35.3%, 17.9% 0%, 27.7% 23.4%, 76.2% 2.5%, 74.2% 56%, 100% 38.5%)"></div>
      </div>
    </div>
  
    <div class="space-y-16 py-10 xl:space-y-20">
      <div>
        <div class="mx-auto  ">
          <h2 class="mx-auto max-w-2xl text-base font-semibold text-gray-900 lg:mx-0 lg:max-w-none">Recent activity</h2>
        </div>
        <div class="mt-6 overflow-hidden border-t border-gray-100">
          <div class="mx-auto px-2">
            <div class="mx-auto max-w-2xl lg:mx-0 lg:max-w-none">
              <table class="w-full text-left">
                <thead class="sr-only">
                  <tr>
                    <th>Amount</th>
                    <th class="hidden sm:table-cell">Client</th>
                    <th>More details</th>
                  </tr>
                </thead>
                <tbody>
                  <tr class="text-sm/6 text-gray-900">
                    <th scope="colgroup" colspan="3" class="relative isolate py-2 font-semibold">
                      <time datetime="2023-03-22">Today</time>
                      <div class="absolute inset-y-0 right-full -z-10 w-screen border-b border-gray-200 bg-gray-50"></div>
                      <div class="absolute inset-y-0 left-0 -z-10 w-screen border-b border-gray-200 bg-gray-50"></div>
                    </th>
                  </tr>
                  {#each data as d}
                  <tr>
                    <td class="relative py-5 pr-6">
                      <div class="flex gap-x-6">
                        <svg class="hidden h-6 w-5 flex-none text-gray-400 sm:block" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true" data-slot="icon">
                          <path fill-rule="evenodd" d="M10 18a8 8 0 1 0 0-16 8 8 0 0 0 0 16Zm-.75-4.75a.75.75 0 0 0 1.5 0V8.66l1.95 2.1a.75.75 0 1 0 1.1-1.02l-3.25-3.5a.75.75 0 0 0-1.1 0L6.2 9.74a.75.75 0 1 0 1.1 1.02l1.95-2.1v4.59Z" clip-rule="evenodd" />
                        </svg>
                        <div class="flex-auto">
                          <div class="flex items-start gap-x-3">
                            <div class="text-sm/6 font-medium text-gray-900">{toCurrencyFormat(d.amount)}</div>
                            <div class="rounded-md bg-green-50 px-2 py-1 text-xs font-medium text-green-700 ring-1 ring-inset ring-green-600/20">Paid</div>
                          </div>
                          <div class="mt-1 text-xs/5 text-gray-500">{toCurrencyFormat(d.tax)} tax</div>
                        </div>
                      </div>
                      <div class="absolute bottom-0 right-full h-px w-screen bg-gray-100"></div>
                      <div class="absolute bottom-0 left-0 h-px w-screen bg-gray-100"></div>
                    </td>
                    <td class="hidden py-5 pr-6 sm:table-cell">
                      <div class="text-sm/6 text-gray-900">{d.title}</div>
                      <div class="mt-1 text-xs/5 text-gray-500">{d.description}</div>
                    </td>
                    <td class="py-5 text-right">
                      <div class="flex justify-end">
                        <a href="#" class="text-sm/6 font-medium text-indigo-600 hover:text-indigo-500">View<span class="hidden sm:inline ml-1"> transaction</span><span class="sr-only">, invoice #00012, Reform</span></a>
                      </div>
                      <div class="mt-1 text-xs/5 text-gray-500">Invoice <span class="text-gray-900">#{d.invoiceNumber}</span></div>
                    </td>
                  </tr>
                  {/each}
               
  
                  <tr class="text-sm/6 text-gray-900">
                    <th scope="colgroup" colspan="3" class="relative isolate py-2 font-semibold">
                      <time datetime="2023-03-21">Yesterday</time>
                      <div class="absolute inset-y-0 right-full -z-10 w-screen border-b border-gray-200 bg-gray-50"></div>
                      <div class="absolute inset-y-0 left-0 -z-10 w-screen border-b border-gray-200 bg-gray-50"></div>
                    </th>
                  </tr>
                  {#each yesterdayData as yData}
                  <tr>
                    <td class="relative py-5 pr-6">
                      <div class="flex gap-x-6">
                        <svg class="hidden h-6 w-5 flex-none text-gray-400 sm:block" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true" data-slot="icon">
                          <path fill-rule="evenodd" d="M10 18a8 8 0 1 0 0-16 8 8 0 0 0 0 16Zm-.75-4.75a.75.75 0 0 0 1.5 0V8.66l1.95 2.1a.75.75 0 1 0 1.1-1.02l-3.25-3.5a.75.75 0 0 0-1.1 0L6.2 9.74a.75.75 0 1 0 1.1 1.02l1.95-2.1v4.59Z" clip-rule="evenodd" />
                        </svg>
                        <div class="flex-auto">
                          <div class="flex items-start gap-x-3">
                            <div class="text-sm/6 font-medium text-gray-900">{toCurrencyFormat(yData.amount)}</div>
                            <div class="rounded-md bg-green-50 px-2 py-1 text-xs font-medium text-green-700 ring-1 ring-inset ring-green-600/20">Paid</div>
                          </div>
                          <div class="mt-1 text-xs/5 text-gray-500">{toCurrencyFormat(yData.tax)} tax</div>
                        </div>
                      </div>
                      <div class="absolute bottom-0 right-full h-px w-screen bg-gray-100"></div>
                      <div class="absolute bottom-0 left-0 h-px w-screen bg-gray-100"></div>
                    </td>
                    <td class="hidden py-5 pr-6 sm:table-cell">
                      <div class="text-sm/6 text-gray-900">{yData.title}</div>
                      <div class="mt-1 text-xs/5 text-gray-500">{yData.description}</div>
                    </td>
                    <td class="py-5 text-right">
                      <div class="flex justify-end">
                        <a href="#" class="text-sm/6 font-medium text-indigo-600 hover:text-indigo-500">View<span class="hidden sm:inline ml-1"> transaction</span><span class="sr-only">, invoice #00010, SavvyCal</span></a>
                      </div>
                      <div class="mt-1 text-xs/5 text-gray-500">Invoice <span class="text-gray-900">#{yData.invoiceNumber}</span></div>
                    </td>
                  </tr>
                  {/each}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
  

    </div>
    {/if}
  </main>
  