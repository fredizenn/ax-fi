<script lang="ts">
	import { goto } from '$app/navigation';
    import Form from '$lib/components/forms/form.svelte';
    import TextField from '$lib/components/forms/textField.svelte';
	import Button from '$lib/components/ui/button.svelte';
	import Loader from '$lib/components/ui/loader.svelte';
    import { z } from 'zod';
    
    let loading = false;
    const init = {
        phoneNumber: '',
        applicationNumber: '',
    }

    const schema = z.object({
        phoneNumber: z.string().min(1, 'Required'),
        applicationNumber: z.string().min(1, 'Required'),
    })

    const submit = ({detail}: any) => {
        loading = true
        setTimeout(() => {
            goto(`${detail.values.applicationNumber}/?phoneNumber=${detail.values.phoneNumber}`)
            loading = false;
        }, 2000)
    }
</script>

<div class="mx-auto flex w-full sm:max-w-xl flex-col justify-center rounded px-6 py-12 my-20 shadow lg:px-8">
    <div class="sm:mx-auto sm:w-full sm:max-w-sm">

        <!-- <img class="mx-auto h-24 w-auto" src={coa} alt="Your Company" /> -->
        <h2 class="mt-2 text-center text-2xl/9 font-medium tracking-tight text-gray-900">
            Enter your details to continue
        </h2>
    </div>

    <div class="mt-10 sm:mx-auto sm:w-full sm:max-w-2xl">
        <Form {schema} {init}  on:submit={submit}>
            <div class="grid-cols-1 gap-x-4 gap-y-4 md:grid">
                <TextField showLabel label="Phone Number" name="phoneNumber" required />
                <TextField showLabel label="Application Number" name="applicationNumber" required />
            </div>
            <div>
                <Button
                    type="submit"
                    disabled={loading}
                    busy={loading}
                    otherClasses="mt-4 flex w-full hover:bg-green-700 text-white justify-center rounded-md bg-green-800 py-3">Proceed</Button
                >
            </div>
        </Form>
    </div>
</div>

