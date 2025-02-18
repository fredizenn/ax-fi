import { defineConfig } from 'vitest/config';
import { sveltekit } from '@sveltejs/kit/vite';

export default defineConfig({
	plugins: [sveltekit()],
	server: {
		host: true,
		port: 5178
	},

	test: {
		include: ['src/**/*.{test,spec}.{js,ts}']
	}
});
