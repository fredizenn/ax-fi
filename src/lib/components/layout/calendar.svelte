<script lang="ts">
    import { createEventDispatcher, onMount } from 'svelte';
    import { writable } from 'svelte/store';
    import Icon from '@iconify/svelte';
    import { Dropdown, Button, DropdownItem, Modal, Label, Input, Textarea } from 'flowbite-svelte';
	import TextField from '$lib/components/forms/textField.svelte';
    import Form from '$lib/components/forms/form.svelte';
	import { z } from 'zod';

    interface Event {
      id: number;
      date: string;
      time: string;
      datetime: string;
      name: string;
    }
    
    export let initialEvents: Event[] = [];
    
    const dispatch = createEventDispatcher();
    const events = writable<Event[]>(initialEvents);
    let currentMonth = new Date().getMonth();
    let currentYear = new Date().getFullYear();
    let days: any = [];
    let showAddEventModal = false;
    let selectedDay: string | null = null;
    
    let eventName = '';
    let eventTime = '';
    let eventLocation = '';
    
    function generateCalendarDays(month: number, year: number) {
      const result = [];
      const firstDay = new Date(year, month, 1);
      const lastDay = new Date(year, month + 1, 0);
      
      let firstDayOfWeek = firstDay.getDay() - 1;
      if (firstDayOfWeek < 0) firstDayOfWeek = 6;
      
      const prevMonthLastDay = new Date(year, month, 0).getDate();
      for (let i = firstDayOfWeek - 1; i >= 0; i--) {
        const day = prevMonthLastDay - i;
        const date = new Date(year, month - 1, day);
        result.push({
          date: date.toISOString().split('T')[0],
          isCurrentMonth: false
        });
      }
      
      const today = new Date();
      today.setHours(0, 0, 0, 0);
      
      for (let day = 1; day <= lastDay.getDate(); day++) {
        const date = new Date(year, month, day);
        const dateString = date.toISOString().split('T')[0];
        
        let hasEvents = false;
        events.subscribe(currentEvents => {
          hasEvents = currentEvents.some(event => event.date.startsWith(dateString.split('T')[0]));
        })();
        
        result.push({
          date: dateString,
          isCurrentMonth: true,
          isToday: date.getTime() === today.getTime(),
          hasEvents
        });
      }
      
      const daysNeeded = 42 - result.length;
      for (let day = 1; day <= daysNeeded; day++) {
        const date = new Date(year, month + 1, day);
        result.push({
          date: date.toISOString().split('T')[0],
          isCurrentMonth: false
        });
      }
      
      return result;
    }
    
    function prevMonth() {
      if (currentMonth === 0) {
        currentMonth = 11;
        currentYear--;
      } else {
        currentMonth--;
      }
      days = generateCalendarDays(currentMonth, currentYear);
    }

    const schema = z.object({
      name: z.string(),
      date: z.date(),
      time: z.string(),
      location: z.string(),
    })
    
    function nextMonth() {
      if (currentMonth === 11) {
        currentMonth = 0;
        currentYear++;
      } else {
        currentMonth++;
      }
      days = generateCalendarDays(currentMonth, currentYear);
    }
    
    function addEvent() {
      if (!selectedDay || !eventName || !eventTime) return;
      
      const newEvent = {
        id: Date.now(),
        date: selectedDay,
        time: eventTime,
        datetime: `${selectedDay}T${eventTime.replace(':', '')}`,
        name: eventName,
      };
      
      events.update(currentEvents => [...currentEvents, newEvent]);
      
      days = generateCalendarDays(currentMonth, currentYear);
      
      eventName = '';
      eventTime = '';
      eventLocation = '';
      showAddEventModal = false;
      
      dispatch('eventAdded', newEvent);
    }
    
    function selectDay(day: any) {
      if (!day.isCurrentMonth) return;
      
      selectedDay = day.date;
      showAddEventModal = true;
    }
    
    function getMonthName(month: number) {
      return new Date(2000, month, 1).toLocaleString('default', { month: 'long' });
    }
    
    $: {
      $events;
      days = generateCalendarDays(currentMonth, currentYear);
    }
    
    onMount(() => {
      days = generateCalendarDays(currentMonth, currentYear);
    });
    
    function classNames(...classes: any) {
      return classes.filter(Boolean).join(' ');
    }
  </script>
  
  <div class="mt-4 text-center">
    <div class="flex items-center text-gray-900">
      <button
        type="button"
        class="-m-1.5 flex flex-none items-center justify-center p-1.5 text-gray-400 hover:text-gray-500"
        on:click={prevMonth}
      >
        <span class="sr-only">Previous month</span>
        <Icon icon="heroicons:chevron-left" class="size-5" aria-hidden="true" />
      </button>
      <div class="flex-auto text-sm font-semibold">
        {getMonthName(currentMonth)} {currentYear}
      </div>
      <button
        type="button"
        class="-m-1.5 flex flex-none items-center justify-center p-1.5 text-gray-400 hover:text-gray-500"
        on:click={nextMonth}
      >
        <span class="sr-only">Next month</span>
        <Icon icon="heroicons:chevron-right" class="size-5" aria-hidden="true" />
      </button>
    </div>
    <div class="mt-6 grid grid-cols-7 text-xs/6 text-gray-500">
      <div>M</div>
      <div>T</div>
      <div>W</div>
      <div>T</div>
      <div>F</div>
      <div>S</div>
      <div>S</div>
    </div>
    <div class="isolate mt-2 grid grid-cols-7 gap-px rounded-lg bg-gray-200 text-sm shadow ring-1 ring-gray-200">
      {#each days as day, dayIdx}
        <button
          type="button"
          on:click={() => selectDay(day)}
          class={classNames(
            'py-1.5 hover:bg-gray-100 focus:z-10',
            day.isCurrentMonth ? 'bg-white' : 'bg-gray-50',
            day.isToday && 'font-semibold',
            !day.isCurrentMonth && !day.isToday && 'text-gray-400',
            day.isToday && 'text-indigo-600',
            dayIdx === 0 && 'rounded-tl-lg',
            dayIdx === 6 && 'rounded-tr-lg',
            dayIdx === days.length - 7 && 'rounded-bl-lg',
            dayIdx === days.length - 1 && 'rounded-br-lg',
          )}
        >
          <time
            datetime={day.date}
            class={classNames(
              'mx-auto flex size-7 items-center justify-center rounded-full',
              day.hasEvents && 'ring-2 ring-indigo-500',
              day.isToday && 'bg-indigo-100',
            )}
          >
            {day.date.split('-').pop().replace(/^0/, '')}
          </time>
        </button>
      {/each}
    </div>
    <button
      type="button"
      on:click={() => {
        selectedDay = new Date().toISOString().split('T')[0];
        showAddEventModal = true;
      }}
      class="mt-8 w-full rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
    >
      Add event
    </button>
  </div>
  
  <Modal bind:open={showAddEventModal} size="sm" autoclose>
    <div class="p-4">
      <h3 class="mb-4 text-lg font-semibold text-gray-900">Add Event</h3>
      <Form {schema} on:submit={addEvent} class="space-y-4">
        <div>
          <TextField id="event-name" label="Event name" showLabel placeholder="" name="" required />
        </div>
        <div>
          <TextField id="event-date" label="Event date" showLabel name type="date" required />
        </div>
        <div>
          <TextField id="event-time" label="Time" showLabel name="time" type="time" required />
        </div>
        <!-- <div>
          <TextField id="event-location" showLabel label="Location" placeholder="Office or Virtual" />
        </div> -->
        <div class="flex justify-end space-x-2">
          <Button type="button" color="alternative" on:click={() => (showAddEventModal = false)}>Cancel</Button>
          <Button type="submit" class="bg-green-700 hover:bg-green-600">Add Event</Button>
        </div>
    </Form>
    </div>
  </Modal>