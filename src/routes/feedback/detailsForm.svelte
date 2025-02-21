<script lang="ts">
	import Form from '$lib/components/forms/form.svelte';
	import { z } from 'zod';
	import TextAreaField from '$lib/components/forms/textAreaField.svelte';
	import Button from '$lib/components/ui/button.svelte';
	import { activeStep } from './feedbackStore';
	interface Init {
		images: File[];
		description: string;
	}

	let init: Init = {
		images: [],
		description: ''
	};

	const schema = z.object({
		description: z.string().min(1, 'Required'),
		images: z.array(z.any()).max(4, 'Maximum 4 files allowed')
	});

    const submit = async ({detail}: any) => {
        activeStep.set(2)
    }

	let uploadedFiles: File[] = [];
	let isDragging = false;

	function handleFiles(files: FileList | File[]) {
		const newFiles = Array.from(files).filter((file) => file.type.match(/^image\/(png|jpeg|gif)/));

		if (uploadedFiles.length + newFiles.length > 4) {
			alert('Maximum 4 files allowed');
			return;
		}

		uploadedFiles = [...uploadedFiles, ...newFiles];
		init.images = uploadedFiles;
	}

	function handleFileInput(event: Event) {
		const input = event.target as HTMLInputElement;
		if (input.files) {
			handleFiles(input.files);
			input.value = '';
		}
	}

	function handleDragEnter(event: DragEvent) {
		event.preventDefault();
		event.stopPropagation();
		isDragging = true;
	}

	function handleDragLeave(event: DragEvent) {
		event.preventDefault();
		event.stopPropagation();
		isDragging = false;
	}

	function handleDragOver(event: DragEvent) {
		event.preventDefault();
		event.stopPropagation();
		isDragging = true;
	}

	function handleDrop(event: DragEvent) {
		event.preventDefault();
		event.stopPropagation();
		isDragging = false;

		const files = event.dataTransfer?.files;
		if (files) {
			handleFiles(files);
		}
	}

	function removeFile(index: number) {
		uploadedFiles = uploadedFiles.filter((_, i) => i !== index);
		init.images = uploadedFiles;
	}
</script>

<Form {init} {schema} on:submit={submit}>
	<div class="space-y-12">
		<div class="grid grid-cols-1 gap-x-8 gap-y-10 border-b border-gray-900/10 pb-12 md:grid-cols-3">
			<div>
				<h2 class="text-base/7 font-semibold text-gray-900">Details</h2>
				<p class="mt-1 text-sm/6 text-gray-600">
					This information will be displayed publicly so be careful what you share.
				</p>
			</div>

			<div class="grid max-w-2xl grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6 md:col-span-2">
				<div class="col-span-full">
					<label for="about" class="block text-sm/6 font-medium text-gray-900">Description</label>
					<div class="mt-2">
						<TextAreaField
							name="description"
							id="description"
							class="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
						/>
					</div>
					<p class="mt-3 text-sm/6 text-gray-600">Write a few sentences about your report.</p>
				</div>

				<div class="col-span-full">
					<label for="cover-photo" class="block text-sm/6 font-medium text-gray-900"
						>Add photos ({uploadedFiles.length}/4)</label
					>
					<div
						role="region"
						aria-label="File Upload Dropzone"
						class="mt-2 flex flex-col rounded-lg border border-dashed border-gray-900/25 px-6 py-10 transition-colors duration-200"
						class:bg-indigo-50={isDragging}
						on:dragenter={handleDragEnter}
						on:dragleave={handleDragLeave}
						on:dragover={handleDragOver}
						on:drop={handleDrop}
					>
						<div class="text-center">
							<svg
								class="mx-auto size-12 text-gray-300"
								viewBox="0 0 24 24"
								fill="currentColor"
								aria-hidden="true"
								data-slot="icon"
							>
								<path
									fill-rule="evenodd"
									d="M1.5 6a2.25 2.25 0 0 1 2.25-2.25h16.5A2.25 2.25 0 0 1 22.5 6v12a2.25 2.25 0 0 1-2.25 2.25H3.75A2.25 2.25 0 0 1 1.5 18V6ZM3 16.06V18c0 .414.336.75.75.75h16.5A.75.75 0 0 0 21 18v-1.94l-2.69-2.689a1.5 1.5 0 0 0-2.12 0l-.88.879.97.97a.75.75 0 1 1-1.06 1.06l-5.16-5.159a1.5 1.5 0 0 0-2.12 0L3 16.061Zm10.125-7.81a1.125 1.125 0 1 1 2.25 0 1.125 1.125 0 0 1-2.25 0Z"
									clip-rule="evenodd"
								/>
							</svg>
							<div class="mt-4 flex justify-center text-sm/6 text-gray-600">
								<label
									for="file-upload"
									class="relative cursor-pointer rounded-md bg-white font-semibold hover:text-indigo-500"
								>
									<span>Upload files</span>
									<input
										id="file-upload"
										name="images"
										type="file"
										class="sr-only"
										multiple
										accept="image/png,image/jpeg,image/gif"
										on:change={handleFileInput}
									/>
								</label>
								<p class="pl-1">or drag and drop</p>
							</div>
							<p class="text-xs/5 text-gray-600">PNG, JPG, GIF up to 10MB (Max 4 files)</p>
						</div>

						{#if uploadedFiles.length > 0}
							<div class="mt-4 space-y-2">
								{#each uploadedFiles as file, i}
									<div class="flex items-center justify-between rounded bg-gray-50 p-2">
										<span class="text-sm text-gray-600">{file.name}</span>
										<button
											type="button"
											class="text-xs text-red-500 hover:text-red-700"
											on:click={() => removeFile(i)}
										>
											Remove
										</button>
									</div>
								{/each}
							</div>
						{/if}
					</div>
				</div>
			</div>
		</div>
        <div class="w-full flex items-center gap-x-4 justify-end">
            <Button
            on:click={() => --$activeStep}
			type="button"
			otherClasses="py-3"
		>
			Previous
		</Button>
            <Button
			type="submit"
			otherClasses="w-1/5 bg-green-800 hover:bg-green-700 py-3 text-white"
		>
			Next
		</Button>
        </div>
		
	</div>
</Form>
