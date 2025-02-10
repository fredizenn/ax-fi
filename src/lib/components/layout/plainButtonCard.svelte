<script>
	export let icon = '';
	export let iconSize = 18;
	export let bgColor = '';
	export let iconColor = '';
</script>

<div
	on:click
	class="flex justify-between rounded-md p-1 items-center cursor-pointer hover:bg-blue-200/40"
>
	<div class="flex items-center gap-3">
		<div class="rounded-full text-2xl {bgColor} w-10 h-10 grid place-content-center text">
			<iconify-icon {icon} class={iconColor} style="font-size: {iconSize}px;" />
		</div>
		<slot />
	</div>
	<button on:click class="hover:bg-gray-200 rounded-full w-9 h-9 grid place-content-center">
		<iconify-icon icon="iconamoon:arrow-right-2-light" style="font-size: 25px;" />
	</button>
</div>
