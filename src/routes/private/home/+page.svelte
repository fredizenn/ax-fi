<script>
	import { activePage } from '$data/appStore';
	import Dashboard from '$modules/homePage/index.svelte';

	$activePage = {
		title: 'Home',
		showBreadCrumb: false
	};
</script>
<!-- 
<div class="w-full h-full pt-4 px-6">
	<Dashboard />
</div> -->
