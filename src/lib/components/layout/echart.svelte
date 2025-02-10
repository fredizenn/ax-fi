<script lang="ts">
	import { onMount, onDestroy } from 'svelte';
	import * as echarts from 'echarts';

	export let chartOptions: echarts.EChartsOption;
	export let eventListeners: { event: string; handler: (params?: any) => void }[] = [];

	let chartContainer: HTMLDivElement | null = null;
	let chartInstance: echarts.ECharts | undefined;
	let resizeObserver: ResizeObserver;

	onMount(() => {
		if (chartContainer) {
			chartInstance = echarts.init(chartContainer);
			chartInstance.setOption(chartOptions);

			// Add event listeners
			eventListeners.forEach(({ event, handler }) => {
				chartInstance?.on(event, handler);
			});

			// Initialize resize observer
			resizeObserver = new ResizeObserver(() => {
				chartInstance?.resize();
			});
			resizeObserver.observe(chartContainer);
		}

		return () => {
			// Remove event listeners
			eventListeners.forEach(({ event, handler }) => {
				chartInstance?.off(event, handler);
			});
			chartInstance?.dispose();
			// Disconnect resize observer
			resizeObserver.disconnect();
		};
	});

	// React to changes in chartOptions or eventListeners
	$: {
		if (chartInstance) {
			chartInstance.setOption(chartOptions);
			eventListeners.forEach(({ event, handler }) => {
				chartInstance?.off(event); // Remove existing listeners to avoid duplication
				chartInstance?.on(event, handler);
			});
		}
	}
</script>

<div bind:this={chartContainer} class="chart"></div>

<style>
	.chart {
		width: 100%;
		height: 100%;
	}
</style>
