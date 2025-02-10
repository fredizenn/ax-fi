<script lang="ts" context="module">
	export interface IActivity {
		date: Date;
		title: string;
		notes?: string;
		activity?: string;
		type?: string;
	}
</script>

<script lang="ts">
	import dayjs from 'dayjs';
	import { Activity, ActivityItem, type ActivityType } from 'flowbite-svelte';

	export let activities: IActivity[] = [];

	let activityData: ActivityType[] = [];
	function formatDateDiff(currentDate: Date, previousDate: Date) {
		const ms = Math.abs(dayjs(currentDate).diff(previousDate));
		let divisor = 1;
		let unit = 'ms';
		if (ms >= 86400000) {
			divisor = 86400000;
			unit = 'd';
		} else if (ms >= 3600000) {
			divisor = 3600000;
			unit = 'h';
		} else if (ms >= 60000) {
			divisor = 60000;
			unit = 'm';
		} else if (ms >= 1000) {
			divisor = 1000;
			unit = 's';
		}
		return `<span class="bg-blue-50 text-blue-400 rounded p-1 ml-3 text-sm">+${(ms / divisor).toFixed(0)}${unit}</span>`;
	}
	$: {
		let lastDate: Date | null = null;
		activityData = activities.map((x) => {
			const diffString = lastDate ? formatDateDiff(x.date, lastDate) : '';
			lastDate = x.date;
			return {
				title: x.title + diffString,
				text: x.notes,
				date: dayjs(x.date).fromNow(),
				src: '',
				alt: ''
			};
		});
	}
</script>

<Activity>
	<ActivityItem activities={activityData} classSpan="hidden" />
</Activity>
