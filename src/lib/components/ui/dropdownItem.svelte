<script lang="ts">
	import { cn } from '$lib/utils';

	export let href: string | null = null;
	export let otherClasses = '';
</script>

<a
	class={cn(
		'font-medium py-2 px-4 text-sm hover:bg-gray-100 dark:hover:bg-gray-600 flex cursor-pointer',
		otherClasses
	)}
	{href}
	on:click><slot /></a
>
