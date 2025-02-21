<script lang="ts">
	import Button from "$lib/components/ui/button.svelte";
	import Icon from "@iconify/svelte";
	import { Indicator } from "flowbite-svelte";
	import { activeStep } from "./feedbackStore";
	import { z } from "zod";
	import SelectField from "$lib/components/forms/selectField.svelte";
  import Form from "$lib/components/forms/form.svelte";

    let activeIndex = 0

    const agencies: any = [
    ]
    let selectedOption: any = null
    let init = {
        agency: ''}
    const options = [
        {
            title: 'General',
            description: 'Submit an uncategorized report',
            color: 'bg-pink-600',
            icon: 'clarity:asterisk-line',
        },
        {
            title: 'Environmental Disturbance',
            description: 'Report environmental or noise pollution',
            color: 'bg-emerald-600',
            icon: 'arcticons:proxmox-virtual-environment',
        },
        {
            title: 'Fraud & Corruption',
            description: 'Report fraudulent or corrupt activity',
            color: 'bg-amber-600',
            icon: 'game-icons:prisoner',
        },
        {
            title: 'Galamsey',
            description: 'Report illegal mining activity',
            color: 'bg-red-600',
            icon: 'uit:gold',
        },
        {
            title: 'IV',
            description: 'Report an issue with IV',
            color: 'bg-indigo-600',
            icon: 'arcticons:unciv',
        },
        {
            title: 'Recommendations',
            description: 'Recommendations and suggestions',
            color: 'bg-slate-600',
            icon: 'material-symbols-light:recommend',
        },
        {
            title: 'Rate',
            description: 'Positive feedback on any public official',
            color: 'bg-blue-600',
            icon: 'material-symbols-light:star-rate-rounded',
        }
    ]


    const schema = z.object({
      // agency: z.string().min(1, 'Required')
    })

    const submit = async ({ detail }: any) => {
      console.log(detail.values, selectedOption) 
      activeStep.set(1)
    }
</script>


<Form {init} {schema} on:submit={submit}>
  <SelectField showLabel label="Select Agency if applicable" name="agency" id="agency" options={agencies} />

<div class="space-y-4 border-b border-gray-900/10 pb-12">
  
    <h2 class="text-sm font-medium text-gray-500">Select an option your report is concerned with</h2>
    <ul role="list" class="mt-3 grid grid-cols-1 gap-5 sm:grid-cols-2 sm:gap-6 lg:grid-cols-3">
        {#each options as o, index}
      <button type="button" onclick={() => {selectedOption = o; activeIndex = index}} class="col-span-1 flex text-left rounded-md cursor-pointer hover:bg-slate-100 shadow-sm relative">
        <div class="flex w-10 shrink-0 items-center justify-center rounded-l-md {o.color} text-sm font-medium text-white"><Icon icon={o.icon} class="w-7 h-7" /></div>
        <div class="flex flex-1 items-center justify-between truncate rounded-r-md border-b border-r border-t border-gray-200 bg-white">
          <div class="flex-1 truncate px-4 py-2 text-sm">
            <a href="#" class="font-medium text-gray-900 hover:text-gray-600">{o.title}</a>
            <p class="text-gray-500 truncate">{o.description}</p>
          </div>
          {#if activeIndex === index}
          <Indicator color="blue" border size="xl" placement="top-right">
            <Icon icon="material-symbols-light:check" class=" text-white w-6 h-6" />
          </Indicator>
          {/if}
        </div>
    </button>
      {/each}
    
    </ul>
    
  </div>
  <div class="flex w-full p-5 items-center justify-center">
    <Button
    type="submit"
    otherClasses="mx-auto w-1/2 align-middle bg-green-800 hover:bg-green-700 py-3 text-white"
  >
    Next
  </Button>
  </div>

  </Form>
  