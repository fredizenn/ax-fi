<script lang="ts">
	import { goto } from "$app/navigation";

    export let signInWithEmail = true;

    // function subm
</script>

<form class="space-y-6" action="#" method="POST">
    {#if signInWithEmail}
    <div>
        <label for="email" class="block text-sm/6 font-medium text-gray-900">Email address</label>
        <div class="mt-2">
            <input
                type="email"
                name="email"
                id="email"
                autocomplete="email"
                required
                class="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
            />
        </div>
    </div>
    {:else}
    <div>
        <label for="phoneNumber" class="block text-sm/6 font-medium text-gray-900">Phone number</label>
        <div class="mt-2">
            <input
                type="text"
                name="phoneNumber"
                required
                class="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
            />
        </div>
    </div>
    {/if}

    <div>
        <div class="flex items-center justify-between">
            <label for="password" class="block text-sm/6 font-medium text-gray-900">Password</label>
            <div class="text-sm">
                <a href="#" class="text-xs font-medium text-indigo-600 hover:text-indigo-500"
                    >Forgot password?</a
                >
            </div>
        </div>
        <div class="mt-2">
            <input
                type="password"
                name="password"
                id="password"
                autocomplete="current-password"
                required
                class="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
            />
        </div>
    </div>

    <div>
        <button
            on:click={() => goto('/dashboard')}
            type="submit"
            class="flex w-full justify-center rounded-md bg-green-800 px-3 py-1.5 text-sm/6 font-semibold text-white shadow-sm hover:bg-green-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            >Sign in</button
        >
    </div>
</form>