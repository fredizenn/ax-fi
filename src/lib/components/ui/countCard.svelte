<!-- <script lang="ts">
	export let icon = '';
	export let label = '';
	export let count = 0;
	export let positive = false;
	export let negative = false;
	export let description = '';
	export let path: string | null = null;
	export let high = false;
	export let showHover = true;
</script>

<a
	href={count && path ? path : null}
	class={`flex items-center gap-3 py-2 px-2.5 rounded-xl ${
		count > 0
			? `bg-white loginbox border border-transparent ${
					showHover ? 'hover:border hover:border-blue-300 cursor-pointer' : ''
				}`
			: 'border loginbox bg-white'
	}`}
	on:click
>
	<div class="bg-white rounded-full w-12 h-12 flex justify-center items-center loginbox shrink-0">
		<iconify-icon {icon} style="font-size: 21px;" />
	</div>
	<div class="flex flex-col w-full">
		<div class="flex gap-2 items-center">
			<p class="text-2xl antialiased tracking-tighter">{count}</p>
			{#if description}
				<p class={`text-sm pt-2 ${positive ? 'text-teal-500' : negative ? 'text-red-400' : ''}`}>
					{description}
				</p>
			{/if}
			{#if high}
				<p class="text-sm pt-2" class:text-teal-500={positive} class:text-red-400={!positive}>
					<iconify-icon icon="ic:baseline-arrow-outward" style="font-size: 20px;" />
				</p>
			{/if}
		</div>
		<span class="tracking-tight text-gray-600 text-[15px] truncate block">
			{label}
		</span>
	</div>
</a> -->
