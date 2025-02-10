<script lang="ts" context="module">
	export interface IButtonConfig {
		kind: string;
		label: string;
		subLabel: string;
	}
	export type IButtonConfigKind =
		| 'generic'
		| 'accept'
		| 'approve'
		| 'reject'
		| 'transfer'
		| 'recommendation'
		| 'file'
		| 'form';
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
	export let kind: IButtonConfigKind = 'generic';
	export let active = false;
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
	class=" rounded-[6px] border-gray-400/40 pl-4 py-2.5 cursor-pointer {!showBg &&
		'hover:bg-blue-200/40'} flex items-center {active && 'bg-blue-200/40 lg:bg-white'}"
	class:bg-white={showBg}
	class:shadow={showBg && !moreShadow}
	class:hover:scale-95={showBg}
	class:h-20={moreHeight}
	class:loginbox={moreShadow}
	on:click
	{href}
>
	<div class="flex justify-between items-center w-full">
		<div class="flex justify-start items-center gap-3 w-full">
			<div class="{iconBgColor} grid place-content-center p-2.5 rounded-[5px]">
				<iconify-icon {icon} style="font-size: {iconSize}px;" class={iconColor} />
			</div>
			<div class="flex flex-col text-left w-full">
				<span class="font-medium truncate block">{label}</span>
				<span class="text-sm text-gray-500 truncate block min-w-52 w-full">{subLabel}</span>
			</div>
		</div>
		{#if showArrow}
			<p class=" rounded-full w-9 h-9 grid place-content-center">
				<iconify-icon icon="iconamoon:arrow-right-2-light" style="font-size: 25px;" />
			</p>
		{/if}
	</div>
</a>
