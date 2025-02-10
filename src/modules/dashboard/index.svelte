<!-- routes/+page.svelte -->
<script lang="ts">
    import { slide } from 'svelte/transition';
    import { createEventDispatcher } from 'svelte';
  
    const dispatch = createEventDispatcher();
    
    let mobileMenuOpen = false;
  
    const navigation = [
      { name: 'Home', href: '#' },
      { name: 'Invoices', href: '#' },
      { name: 'Clients', href: '#' },
      { name: 'Expenses', href: '#' },
    ];
  
    const secondaryNavigation = [
      { name: 'Last 7 days', href: '#', current: true },
      { name: 'Last 30 days', href: '#', current: false },
      { name: 'All-time', href: '#', current: false },
    ];
  
    const stats = [
      { name: 'Revenue', value: '$405,091.00', change: '+4.75%', changeType: 'positive' },
      { name: 'Overdue invoices', value: '$12,787.00', change: '+54.02%', changeType: 'negative' },
      { name: 'Outstanding invoices', value: '$245,988.00', change: '-1.39%', changeType: 'positive' },
      { name: 'Expenses', value: '$30,156.00', change: '+10.18%', changeType: 'negative' },
    ];
  
    const statuses = {
      Paid: 'text-green-700 bg-green-50 ring-green-600/20',
      Withdraw: 'text-gray-600 bg-gray-50 ring-gray-500/10',
      Overdue: 'text-red-700 bg-red-50 ring-red-600/10',
    };
  
    const days = [
      {
        date: 'Today',
        dateTime: '2023-03-22',
        transactions: [
          {
            id: 1,
            invoiceNumber: '00012',
            href: '#',
            amount: '$7,600.00 USD',
            tax: '$500.00',
            status: 'Paid',
            client: 'Reform',
            description: 'Website redesign',
            icon: 'arrow-up',
          },
          // ... other transactions
        ],
      },
      // ... other days
    ];
  
    const clients = [
      {
        id: 1,
        name: 'Tuple',
        imageUrl: '/placeholder/48/48',
        lastInvoice: { date: 'December 13, 2022', dateTime: '2022-12-13', amount: '$2,000.00', status: 'Overdue' },
      },
      // ... other clients
    ];
  
    function classNames(...classes) {
      return classes.filter(Boolean).join(' ');
    }
  </script>
  
  <div class="min-h-screen bg-white">
    <!-- Header -->
    <header class="absolute inset-x-0 top-0 z-50 flex h-16 border-b border-gray-900/10">
      <div class="mx-auto flex w-full max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <div class="flex flex-1 items-center gap-x-6">
          <button
            type="button"
            on:click={() => (mobileMenuOpen = true)}
            class="-m-3 p-3 md:hidden"
          >
            <span class="sr-only">Open main menu</span>
            <svg class="h-5 w-5 text-gray-900" viewBox="0 0 20 20" fill="currentColor">
              <!-- Menu icon path -->
            </svg>
          </button>
          <img
            alt="Your Company"
            src="/placeholder/32/32"
            class="h-8 w-auto"
          />
        </div>
  
        <nav class="hidden md:flex md:gap-x-11 md:text-sm/6 md:font-semibold md:text-gray-700">
          {#each navigation as item}
            <a href={item.href}>
              {item.name}
            </a>
          {/each}
        </nav>
  
        <!-- Mobile menu -->
        {#if mobileMenuOpen}
          <div
            transition:slide
            class="fixed inset-0 z-50 bg-gray-900/80 backdrop-blur-sm"
            on:click={() => (mobileMenuOpen = false)}
          >
            <div class="fixed inset-y-0 left-0 z-50 w-full overflow-y-auto bg-white px-4 pb-6 sm:max-w-sm sm:px-6">
              <!-- Mobile menu content -->
            </div>
          </div>
        {/if}
      </div>
    </header>
  
    <main>
      <!-- Stats section -->
      <div class="border-b border-b-gray-900/10 lg:border-t lg:border-t-gray-900/5">
        <dl class="mx-auto grid max-w-7xl grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 lg:px-2 xl:px-0">
          {#each stats as stat, i}
            <div class={classNames(
              i % 2 === 1 ? 'sm:border-l' : i === 2 ? 'lg:border-l' : '',
              'flex flex-wrap items-baseline justify-between gap-x-4 gap-y-2 border-t border-gray-900/5 px-4 py-10 sm:px-6 lg:border-t-0 xl:px-8'
            )}>
              <dt class="text-sm/6 font-medium text-gray-500">{stat.name}</dt>
              <dd class={classNames(
                stat.changeType === 'negative' ? 'text-rose-600' : 'text-gray-700',
                'text-xs font-medium'
              )}>
                {stat.change}
              </dd>
              <dd class="w-full flex-none text-3xl/10 font-medium tracking-tight text-gray-900">
                {stat.value}
              </dd>
            </div>
          {/each}
        </dl>
      </div>
  
      <!-- Recent activity -->
      <div class="space-y-16 py-16 xl:space-y-20">
        <!-- Activity table -->
        <div>
          <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <h2 class="mx-auto max-w-2xl text-base font-semibold text-gray-900 lg:mx-0 lg:max-w-none">
              Recent activity
            </h2>
          </div>
          <!-- Table implementation -->
        </div>
  
        <!-- Recent clients -->
        <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div class="mx-auto max-w-2xl lg:mx-0 lg:max-w-none">
            <!-- Clients list implementation -->
          </div>
        </div>
      </div>
    </main>
  </div>