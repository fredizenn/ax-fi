<script lang="ts">
	import TopBar from '$lib/components/layout/topBar.svelte';
	import '../app.css';
	let { children } = $props();
</script>

<div class="flex h-screen w-full flex-col overflow-auto">
	<!-- <div class="flex  overflow-auto"> -->
		<TopBar />

		<div class="h-full overflow-auto pt-16">
			{@render children()}
		</div>
	<!-- </div> -->
</div>
