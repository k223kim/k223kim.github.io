// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

// https://astro.build/config
export default defineConfig({
	site: 'https://k223kim.github.io',
	integrations: [
		starlight({
			title: 'Kaeun Kim',
			social: [
				{ icon: 'github', label: 'GitHub', href: 'https://github.com/k223kim' },
			],
			sidebar: [
				{ label: 'Home', slug: 'index' },
				{ label: 'About', slug: 'about' },
				{
					label: 'Projects',
					items: [{ autogenerate: { directory: 'projects' } }],
				},
				{
					label: 'Blog',
					items: [{ autogenerate: { directory: 'blog' } }],
				},
			],
		}),
	],
});
