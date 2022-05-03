import adapter from '@sveltejs/adapter-auto';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	kit: {
		adapter: adapter()
	},
	files: {
		serviceWorker: 'src/sw.js'
	  },
	outDir: '.svelte-kit',
};

export default config;
