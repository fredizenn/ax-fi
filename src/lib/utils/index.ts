import type { IBreadCrumb } from '$lib/types';
import { type ClassValue, clsx } from 'clsx';
import { toast, type ToastOptions } from 'svelte-french-toast';
import { writable } from 'svelte/store';
import { twMerge } from 'tailwind-merge';
import { nanoid } from 'nanoid';
import { crossfade } from 'svelte/transition';
import { quintOut } from 'svelte/easing';

export function cn(...inputs: ClassValue[]) {
	return twMerge(clsx(inputs));
}

export function createBreadCrumb() {
	const { subscribe, set, update } = writable<IBreadCrumb[]>([{ title: 'Home' }]);
	return {
		subscribe,
		addToFirstIndex: (newCrumb: IBreadCrumb | IBreadCrumb[], clear = false) => {
			update((value) => {
				if (clear) {
					return Array.isArray(newCrumb) ? [...newCrumb] : [newCrumb];
				}

				if (Array.isArray(newCrumb)) {
					return [...newCrumb, ...value];
				} else if (newCrumb) {
					return [newCrumb, ...value];
				}

				return value;
			});
		},
		addToLastIndex: (newCrumb: IBreadCrumb) => {
			update((value) => {
				if (Array.isArray(newCrumb)) {
					return [...value, ...newCrumb];
				} else if (newCrumb) {
					return [...value, newCrumb];
				}
				return value;
			});
		},
		removeFromFront: (index: number) => {
			update((value) => {
				return value.slice(0, index + 1);
			});
		},
		reset: () => set([{ title: 'Home' }])
	};
}

export const showError = (err: string, options?: ToastOptions) => {
	let id = nanoid();
	return toast.error(err, { id: `${id}-${err}`, duration: 8000, ...options });
};

export const showInfo = (err: string, options?: ToastOptions) => {
	let id = nanoid();
	return toast.success(err, { id: `${id}-${err}`, duration: 6000, ...options });
};

interface ToastPromiseOptions {
	promise: Promise<any>;
	loading: string;
	success: string;
	error: string;
	options?: ToastOptions;
}

export const showPromise = async ({
	promise,
	loading,
	success,
	error,
	options
}: ToastPromiseOptions) => {
	let id = nanoid();
	try {
		toast.loading(loading, options);
		const result = await promise;
		toast.success(success, { ...options, id: `${id}-${success}` });
		return result;
	} catch (err) {
		toast.error(error, { ...options, id: `${id}-${error}` });
		throw err;
	}
};

export const [send, receive] = crossfade({
	duration: (d) => Math.sqrt(d * 200),

	fallback(node, params) {
		const style = getComputedStyle(node);
		const transform = style.transform === 'none' ? '' : style.transform;

		return {
			duration: 600,
			easing: quintOut,
			css: (t) => `
				        transform: ${transform} translateX(${(1 - t) * 100}%);
				opacity: ${t}
			`
		};
	}
});

export function extractQueryParam(queryString: string, key: string = 'q'): string {
	const urlParams = new URLSearchParams(queryString);
	const warehouse = urlParams.get(key);
	return warehouse ?? '';
}

export function addCommasToNumber(val: number | string) {
	if (typeof val === 'number') {
		return val
			.toFixed(2)
			.toString()
			.replace(/\B(?=(\d{3})+(?!\d))/g, ',');
	} else {
		return val.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
	}
}

export const toCurrencyFormat = (value: number) =>
    value?.toLocaleString('en-GH', {
      style: 'currency',
      currency: 'GHS',
    })