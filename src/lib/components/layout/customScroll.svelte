<script>
	export let otherClasses = '';
	export let allowBox = false;
</script>

<div
	class="scrollbar-thumb-blue scrollbar-thumb-rounded scrollbar-track-blue-lighter scrollbar-w-2 scrolling-touch overflow-auto {otherClasses} {allowBox &&
		'bg-white rounded-lg p-6  dark:bg-gray-900'}
	
	"
>
	<slot />
</div>
