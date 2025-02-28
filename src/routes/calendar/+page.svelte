<script lang="ts">
    import { writable } from 'svelte/store';
    import { Dropdown, Button, DropdownItem } from 'flowbite-svelte';
    import Icon from '@iconify/svelte';
    import Calendar from '$lib/components/layout/calendar.svelte';
  
    // Define event type
    interface Event {
      id: number;
      date: string; // ISO format YYYY-MM-DD
      time: string;
      datetime: string; // ISO format
      name: string;
      mode: string;
    }
  
    // Sample initial data
    const initialEvents: Event[] = [
      {
        id: 1,
        date: '2022-01-10',
        time: '5:00 PM',
        datetime: '2022-01-10T17:00',
        name: 'Tax Bill',
        mode: 'MTN Mobile Money',
      },
    ];
  
    // Create a writable store for events
    const events = writable<Event[]>(initialEvents);
  
    // Function to format a date for display
    function formatDate(dateString: string): string {
      const date = new Date(dateString);
      const monthNames = [
        'January', 'February', 'March', 'April', 'May', 'June',
        'July', 'August', 'September', 'October', 'November', 'December'
      ];
      
      const month = monthNames[date.getMonth()];
      const day = date.getDate();
      const year = date.getFullYear();
      
      return `${month} ${day}${getOrdinalSuffix(day)}, ${year}`;
    }
  
    // Helper function for ordinal suffixes
    function getOrdinalSuffix(day: number): string {
      if (day > 3 && day < 21) return 'th';
      switch (day % 10) {
        case 1: return 'st';
        case 2: return 'nd';
        case 3: return 'rd';
        default: return 'th';
      }
    }
  
    // Handle new events
    function handleEventAdded(event: any) {
      const newEvent = event.detail;
      events.update(currentEvents => [...currentEvents, newEvent]);
    }
  
    // Function for conditional class names
    function classNames(...classes:any) {
      return classes.filter(Boolean).join(' ');
    }
  </script>
  
  <div class="mx-auto max-w-7xl py-10 px-4 sm:px-0 lg:px-2">
    <h2 class="text-base font-semibold text-gray-900">Recent activity</h2>
    <div class="lg:grid lg:grid-cols-12 lg:gap-x-16">
      <div class="lg:col-start-8 lg:col-end-13 lg:row-start-1 lg:mt-9 xl:col-start-9">
        <Calendar 
          initialEvents={$events} 
          on:eventAdded={handleEventAdded} 
        />
      </div>
      
      <ol class="mt-4 divide-y divide-gray-100 text-sm/6 lg:col-span-7 xl:col-span-8">
        {#each $events as meeting (meeting.id)}
          <li class="relative flex gap-x-6 py-6 xl:static">
            <div class="flex-auto">
              <h3 class="pr-10 font-semibold text-gray-900 xl:pr-0">{meeting.name}</h3>
              <dl class="mt-2 flex flex-col text-gray-500 xl:flex-row">
                <div class="flex items-start gap-x-3">
                  <dt class="mt-0.5">
                    <span class="sr-only">Date</span>
                    <Icon icon="heroicons:calendar" class="size-5 text-gray-400" aria-hidden="true" />
                  </dt>
                  <dd>
                    <time datetime={meeting.datetime}>
                      {formatDate(meeting.date)} at {meeting.time}
                    </time>
                  </dd>
                </div>
                <div class="mt-2 flex items-start gap-x-3 xl:ml-3.5 xl:mt-0 xl:border-l xl:border-gray-400/50 xl:pl-3.5">
                  <dt class="mt-0.5">
                    <span class="sr-only">Location</span>
                    <Icon icon="heroicons:map-pin" class="size-5 text-gray-400" aria-hidden="true" />
                  </dt>
                  <dd>Via {meeting.mode}</dd>
                </div>
              </dl>
            </div>
            <div class="absolute right-0 top-6 xl:relative xl:right-auto xl:top-auto xl:self-center">
              <Dropdown triggeredBy=".event-menu">
                <Button class="event-menu -m-2 flex items-center rounded-full p-2 text-gray-500 hover:text-gray-600">
                  <span class="sr-only">Open options</span>
                  <Icon icon="heroicons:ellipsis-horizontal" class="size-5" aria-hidden="true" />
                </Button>
                <div slot="content" class="py-1">
                  <DropdownItem>Edit</DropdownItem>
                  <DropdownItem>Cancel</DropdownItem>
                </div>
              </Dropdown>
            </div>
          </li>
        {/each}
        
        {#if $events.length === 0}
          <li class="py-6 text-center text-gray-500">
            No upcoming meetings. Add an event to get started.
          </li>
        {/if}
      </ol>
    </div>
  </div>