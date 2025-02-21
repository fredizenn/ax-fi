<script lang="">
	import Icon from "@iconify/svelte";
	import { activeStep } from "./feedbackStore";

    const steps = [
      { active: false, current: false, icon: "mdi:about-circle-outline" },
      { active: false, current: false, icon: "fluent:form-24-regular" },
      { active: false, current: false, icon: "gis:position-o" },
      { active: false, current: false, icon: "ic:round-check"}
    ];
  </script>
  
  <div class="flex items-center justify-center w-full max-w-2xl p-4">
    {#each steps as step, index}
      <div class="relative flex items-center justify-center w-10 h-10 rounded-full {$activeStep === index ? 'bg-emerald-400' : 'bg-emerald-400/20'}">
          <Icon icon={step.icon} class="h-6 w-6 {$activeStep === index ? 'text-white' : 'text-gray-600' }" />
      </div>
  
      {#if index < steps.length - 1}
        <div class="flex-1 h-0.5 mx-2 {step.active ? 'bg-emerald-400 font-bold' : 'bg-emerald-400/20'}"></div>
      {/if}
    {/each}
  </div>