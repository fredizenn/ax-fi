<script lang="ts" context="module">
	export interface IButtonConfig {
		kind: string;
		label: string;
		subLabel: string;
	}
	const kinds = {
		generic: {
			icon: 'solar:verified-check-bold',
			iconBgColor: 'bg-green-300',
			iconSize: 25,
			iconColor: 'text-gray-800',
			label: '',
			subLabel: '',
			showBg: true,
			showArrow: false,
			showIconHover: true,
			moreHeight: false
		},
		enquiries: {
			icon: 'entypo:chat',
			iconBgColor: 'bg-orange-300',
			iconSize: 25,
			iconColor: 'text-orange-800',
			label: '',
			subLabel: '',
			showBg: true,
			showArrow: false,
			showIconHover: true,
			moreHeight: false
		},
		accept: {
			icon: 'ph:check-circle',
			iconBgColor: 'bg-green-300',
			iconSize: 25,
			iconColor: 'text-gray-800',
			label: '',
			subLabel: '',
			showBg: true,
			showArrow: false,
			showIconHover: true,
			moreHeight: false
		},
		approve: {
			icon: 'ph:check-circle',
			iconBgColor: 'bg-green-300',
			iconSize: 25,
			iconColor: 'text-gray-800',
			label: '',
			subLabel: '',
			showBg: true,
			showArrow: false,
			showIconHover: true,
			moreHeight: false
		},
		reject: {
			icon: 'ph:x-circle',
			iconBgColor: 'bg-red-400',
			iconSize: 25,
			iconColor: 'text-white',
			label: '',
			subLabel: '',
			showBg: true,
			showArrow: false,
			showIconHover: true,
			moreHeight: false
		},
		transfer: {
			icon: 'mdi:file-sync',
			iconBgColor: 'bg-sky-300',
			iconSize: 25,
			iconColor: 'text-gray-800',
			label: '',
			subLabel: '',
			showBg: true,
			showArrow: false,
			showIconHover: true,
			moreHeight: false
		},
		recommendation: {
			icon: 'material-symbols:recommend-outline',
			iconBgColor: 'bg-yellow-300',
			iconSize: 25,
			iconColor: 'text-gray-800',
			label: '',
			subLabel: '',
			showBg: true,
			showArrow: false,
			showIconHover: true,
			moreHeight: false
		},
		file: {
			icon: 'ph:file-text',
			iconBgColor: 'bg-gray-200',
			iconSize: 25,
			iconColor: 'text-gray-800',
			label: '',
			subLabel: '',
			showBg: true,
			showArrow: false,
			showIconHover: true,
			moreHeight: false
		},
		form: {
			icon: 'game-icons:archive-register',
			iconBgColor: 'bg-teal-100',
			iconSize: 25,
			iconColor: 'text-blue-800',
			label: '',
			subLabel: '',
			showBg: true,
			showArrow: false,
			showIconHover: true,
			moreHeight: false
		}
	};
</script>

<script lang="ts">
	export let icon = '';
	export let iconBgColor = '';
	export let iconSize = 0;
	export let iconColor = '';
	export let label = '';
	export let subLabel = '';
	export let showBg: boolean | null = null;
	export let showArrow = false;
	export let showIconHover = false;
	export let moreHeight = false;
	export let href: string | null = null;
	export let kind = 'generic';
	export let moreShadow = false;

	// when kind is set, use the defaults from the kind
	$: if (kind) {
		const config = (kinds as any)[kind] ?? kinds.generic;
		icon ||= config.icon;
		iconBgColor ||= config.iconBgColor;
		iconSize ||= config.iconSize;
		iconColor ||= config.iconColor;
		label ||= config.label;
		subLabel ||= config.subLabel;
		showBg = showBg === null || showBg === undefined ? config.showBg : false;
		showArrow ||= config.showArrow;
		showIconHover ||= config.showIconHover;
		moreHeight ||= config.moreHeight;
	}
</script>

<a
	class="cursor-pointer rounded-[6px] border-gray-400/40 pl-4 py-2.5 {!showBg &&
		'hover:bg-blue-200/40'} "
	class:bg-white={showBg}
	class:shadow={showBg}
	class:hover:scale-95={showBg}
	class:h-20={moreHeight}
	class:loginbox={moreShadow}
	on:click
	{href}
>
	<div class="flex justify-between items-center">
		<div class="flex justify-start items-center gap-3">
			<div class="{iconBgColor} grid place-content-center p-2.5 rounded-[5px]">
				<iconify-icon {icon} style="font-size: {iconSize}px;" class={iconColor} />
			</div>
			<div class="flex flex-col text-left">
				<span class="font-medium truncate">{label}</span>
				<span class="text-sm text-gray-500 truncate">{subLabel}</span>
			</div>
		</div>
		{#if showArrow}
			<button
				on:click
				class=" rounded-full w-9 h-9 grid place-content-center"
				class:hover:bg-gray-200={showIconHover}
			>
				<iconify-icon icon="iconamoon:arrow-right-2-light" style="font-size: 25px;" />
			</button>
		{/if}
	</div>
</a>
