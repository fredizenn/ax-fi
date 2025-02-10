<script>
	import { cn } from '$lib/utils';

	export let showIcon = true;
	export let otherClasses = '';
</script>

<div
	class={cn(
		'bg-gradient-to-b from-indigo-100 via-teal-50 to-[#f7f6f2] rounded-md p-3',
		otherClasses
	)}
>
	<div class="flex items-center gap-3">
		<div
			class="grid place-content-center rounded-full border bg-sky-500 border-sky-300 p-1.5 text-white shrink-0"
			class:hidden={!showIcon}
		>
			<iconify-icon icon="mdi:help-outline" style="font-size: 20px;" />
		</div>
		<slot />
	</div>
</div>
