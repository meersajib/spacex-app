import aspectRatio from '@tailwindcss/aspect-ratio';
import containerQueries from '@tailwindcss/container-queries';
import forms from '@tailwindcss/forms';
import typography from '@tailwindcss/typography';
import flowbitePlugin from 'flowbite/plugin'
import type { Config } from 'tailwindcss';

export default {
	content: ['./src/**/*.{html,js,svelte,ts}'],

	theme: {
		extend: {
			container: {
				center: true,
				screens: {
				  sm: "640px",
				  md: "768px",
				  lg: "1024px",
				  xl: "1920px",
				  "2xl": "1920px"
				},
			  },
		}
	},

	plugins: [typography, forms, containerQueries, aspectRatio,flowbitePlugin]
} as Config;
