<script lang="ts">
	import { Button } from 'flowbite-svelte';
</script>

<h2 class="max-w-2xl text-balance text-3xl font-semibold tracking-tight text-gray-900 sm:text-4xl">
	Sign Up With Your Ghana Card Number
</h2>
<form class="mt-10 max-w-md">
	<div class="flex gap-x-4">
		<label for="ghana-card" class="sr-only">Enter Ghana Card Number</label>
		<input
			id="ghana-card"
			name="ghanaCardNumber"
			type="text"
			required
			class="min-w-0 flex-auto rounded-md bg-white px-3.5 py-4 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
			placeholder="GHA-000000000-9"
		/>
		<Button type="submit" class="flex-none rounded-md bg-green-800 px-3.5 py-2.5">Proceed</Button>
	</div>

</form>
