<script lang="ts">
	import { goto } from "$app/navigation";


	import { Button } from "flowbite-svelte";

  function completeVerification() {
    goto('/dashboard/')
  }

</script>

      <h2 class="max-w-2xl text-balance text-3xl font-semibold tracking-tight text-gray-900 sm:text-4xl">Enter Verification Code to verify your phone number</h2>
      <form class="mt-10 max-w-md">
        <div class="flex gap-x-4">
          <label for="v-code" class="sr-only">Enter code here</label>
          <input id="v-code" name="verificationCode" type="text" required class="min-w-0 flex-auto rounded-md bg-white px-3.5 py-4 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6" placeholder="Enter code here">
          <Button on:click={() => completeVerification()} type="submit" class="flex-none rounded-md bg-green-800 px-3.5 py-2.5">Verify</Button>
        </div>
        <p class="mt-4 text-sm/6 text-gray-900">Did not receive a verification code?<a href="#" class="font-semibold text-indigo-600 hover:text-indigo-500">resend</a>.</p>
      </form>
    
  