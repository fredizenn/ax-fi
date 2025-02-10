import { createBreadCrumb } from '$lib/utils';
import type { IRouteInfo, ISideMenu } from '$lib/types';
import { writable } from 'svelte/store';

export const activePage = writable<IRouteInfo>({
	title: 'Dashboard',
	showBreadCrumb: false
});

export const breadCrumb = createBreadCrumb();
export const showPageLoader = writable(false);
export const hideRightDrawer = writable(true);
export const sideQuickActions = writable<ISideMenu>();
export const domainPrefix = writable<string>('app');

export const modalConfig = writable({
	show: false,
	title: '',
	size: 'xs',
	componentConfig: null,
	onDone: (refresh: boolean) => {}
});
