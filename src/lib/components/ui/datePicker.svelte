<script lang="ts">
    import DateInput from "$lib/components/forms/dateField.svelte";
  
    export let contextKey: symbol
    export let children: any[] = []
  </script>
  
  
  
  <DateInput {...$$restProps} {contextKey}/>
  <!-- {#each children || [] as child}
    <ComponentRenderer defn={child} {contextKey}/>
  {/each} -->