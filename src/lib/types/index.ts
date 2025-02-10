import type { IButtonConfigKind } from '$lib/components/ui/actionButton.svelte';

export interface IMenuItem {
	title: string;
	icon?: string;
	path?: string;
	items?: IMenuItem[] | null;
	description?: string;
	iconBg?: string;
	iconColor?: string;
	iconSize?: number;
}

export interface ISideMenu {
	component: any;
	props: any;
	title: string;
	show: boolean;
}
export interface IRouteItem {
	name: string;
	items: IMenuItem[];
}
export interface IRouteInfo {
	title: string;
	showBreadCrumb?: boolean;
	dropdownOptions?: IMenuItem[];
	currentDropdownOption?: IMenuItem;
}

export interface IUserInfo {
	firstName: string;
	lastName: string;
	middleName: string;
	fullName: string;
	role: string;
	roleId: number;
	username: string;
	permissions: string[];
	tags: string[];
	activeDashboardId: number | null;
}

export interface IBreadCrumb {
	title: string;
	component?: any;
	props?: any;
	path?: string;
}

interface IPageInfo {
	hasNextPage: boolean;
	hasPreviousPage: boolean;
}

export interface ITableDataProps<T> {
	pageInfo: IPageInfo;
	totalCount: number;
	items: T[];
}

export type IModalSize = 'xs' | 'sm' | 'md' | 'lg' | 'xl';

export interface IRequestAction {
	kind: IButtonConfigKind;
	label: string;
	subLabel?: string;
	cmd: {
		action: string;
		args: {
			type: string;
			title: string;
			props: {
				parterId: number;
				staffNumber?: string;
				size?: IModalSize;
			};
		};
	};
}

export interface DocumentMetaData {
	id: number;
	type: string;
	title: string;
	viewer: string;
	status: string;
	meta: any[];
	actions: IRequestAction[];
	otherActions: IRequestAction[];
}
