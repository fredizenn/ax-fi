<script lang="ts">
	import Footer from '$lib/components/layout/footer.svelte';
	import TopBar from '$lib/components/layout/topBar.svelte';
	import '../app.css';
	let { children } = $props();
</script>

<div class="min-h-screen flex flex-col">
    <TopBar />

    <main class="flex-grow pt-16">
        {@render children()}
    </main>

    <Footer />
</div>
