<script lang="ts">

    let { individual, business } = $props();
    let active = $state(1);
</script>

<fieldset>
    <legend class="text-sm/6 font-semibold text-gray-900">Select to browse as individual or business</legend>
    <div class="mt-6 grid grid-cols-1 gap-y-6 sm:grid-cols-2 sm:gap-x-4">
        <label
            class:border-indigo-600={active === 1}
            class:ring-2={active === 1}
            class:ring-indigo-600={active === 1}
            class:border-gray-300={active !== 1}
            aria-label="Individual"
            class="relative flex cursor-pointer rounded-lg border bg-white p-4 shadow-sm focus:outline-none"
        >
            <input onclick={() => individual(active = 1)} type="radio" name="project-type"  class="sr-only" />
            <span class="flex flex-1">
                <span class="flex flex-col">
                    <span class="block text-sm font-medium text-gray-900">Individual</span>
                    <span class="mt-1 flex items-center text-sm text-gray-500"
                        >Access personal government services, including passport applications, birth
                        certificates, and tax payments. Manage your individual documentation and
                        transactions securely from one convenient platform.</span
                    >
                </span>
            </span>
            <svg
                class:invisible={active !== 1}
                class="size-5 invisible text-indigo-600"
                viewBox="0 0 20 20"
                fill="currentColor"
                aria-hidden="true"
                data-slot="icon"
            >
                <path
                    fill-rule="evenodd"
                    d="M10 18a8 8 0 1 0 0-16 8 8 0 0 0 0 16Zm3.857-9.809a.75.75 0 0 0-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 1 0-1.06 1.061l2.5 2.5a.75.75 0 0 0 1.137-.089l4-5.5Z"
                    clip-rule="evenodd"
                />
            </svg>
            <span
                class:border={active === 1}
                class:border-indigo-600={active === 1}
                class="pointer-events-none absolute -inset-px rounded-lg border-2"
                aria-hidden="true"
            ></span>
        </label>
        <label
            class:border-indigo-600={active === 2}
            class:ring-2={active === 2}
            class:ring-indigo-600={active === 2}
            class:border-gray-300={active !== 2}
            aria-label="Existing customers"
            class="relative flex cursor-pointer rounded-lg border bg-white p-4 shadow-sm focus:outline-none"
        >
            <input type="radio" onclick={() => business(active = 2)} name="project-type" value="Existing customers" class="sr-only" />
            <span class="flex flex-1">
                <span class="flex flex-col">
                    <span class="block text-sm font-medium text-gray-900">Business</span>
                    <span class="mt-1 flex items-center text-sm text-gray-500"
                        >Streamline your company's interactions with government agencies. Register your
                        business, file corporate taxes, obtain permits, and access specialized business
                        services all in one centralized location.</span
                    >
                </span>
            </span>
            <svg
                class:invisible={active !== 2}
                class="size-5 text-indigo-600"
                viewBox="0 0 20 20"
                fill="currentColor"
                aria-hidden="true"
                data-slot="icon"
            >
                <path
                    fill-rule="evenodd"
                    d="M10 18a8 8 0 1 0 0-16 8 8 0 0 0 0 16Zm3.857-9.809a.75.75 0 0 0-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 1 0-1.06 1.061l2.5 2.5a.75.75 0 0 0 1.137-.089l4-5.5Z"
                    clip-rule="evenodd"
                />
            </svg>
            <span
                class:border={active === 2}
                class:border-indigo-600={active === 2}
                class="pointer-events-none absolute -inset-px rounded-lg border-2"
                aria-hidden="true"
            ></span>
        </label>
    </div>
</fieldset>