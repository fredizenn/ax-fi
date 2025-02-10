// CountryInput.svelte
<script lang="ts">
  import { onMount } from 'svelte';
  import TextField from './textField.svelte';
  
  export let value = '';
  export let name = '';
  export let label = '';
  export let required = false;
  export let placeholder = '';
  export let readonly = false;
  
  let selectedCountry = { code: '+233', flag: '🇬🇭', name: 'Ghana' };
  let showDropdown = false;
  let inputElement: HTMLInputElement;
  
  const countries = [
    { code: '+1', flag: '🇺🇸', name: 'United States' },
    { code: '+44', flag: '🇬🇧', name: 'United Kingdom' },
    { code: '+233', flag: '🇬🇭', name: 'Ghana' },
    // Add more countries as needed
  ];
  
  function selectCountry(country: typeof selectedCountry) {
    selectedCountry = country;
    showDropdown = false;
    if (inputElement) {
      inputElement.focus();
    }
  }
  
  function handleClickOutside(event: MouseEvent) {
    const target = event.target as HTMLElement;
    if (!target.closest('.country-selector')) {
      showDropdown = false;
    }
  }
  
  onMount(() => {
    document.addEventListener('click', handleClickOutside);
    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  });
</script>

<div class="relative flex items-center country-selector">
  <button
    type="button"
    class="absolute left-2 flex items-center gap-1 text-sm border-r pr-2 hover:bg-gray-50 rounded-l-md h-[38.4px]"
    on:click={() => showDropdown = !showDropdown}
  >
    <span>{selectedCountry.flag}</span>
    <span class="text-gray-600">{selectedCountry.code}</span>
  </button>
  
  <TextField
    bind:this={inputElement}
    type="text"
    {name}
    {label}
    {required}
    {placeholder}
    {readonly}
    class="pl-24"
    pattern="[0-9]*"
    bind:value
  />
  
  {#if showDropdown}
    <div class="absolute top-full left-0 mt-1 w-64 max-h-60 overflow-y-auto bg-white border border-gray-200 rounded-md shadow-lg z-50">
      {#each countries as country}
        <button
          type="button"
          class="flex items-center gap-2 w-full px-4 py-2 text-left hover:bg-gray-50"
          on:click={() => selectCountry(country)}
        >
          <span>{country.flag}</span>
          <span class="text-sm">{country.name}</span>
          <span class="text-gray-500 text-sm ml-auto">{country.code}</span>
        </button>
      {/each}
    </div>
  {/if}
</div>

<style>
  .country-selector {
    position: relative;
  }
</style>