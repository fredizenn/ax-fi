import type { IMenuItem } from '$lib/types';
import { writable } from 'svelte/store';

const routesItems: IMenuItem[] = [
	{ title: 'Home', icon: 'humbleicons:dashboard', path: '/private/home' },

];

export const menuItems = writable<IMenuItem[]>(routesItems);
