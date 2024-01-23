/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue,css}'],
	theme: {
		extend: {
		  colors: {
			'blue' : '#0000ff'
		  }
		},
		container: {
		  padding: {
			DEFAULT: '1.25rem',
			lg: '1.875rem',
		  },
		  center: true
		},
		screens: {
		  'sm': '640px',
		  // => @media (min-width: 640px) { ... }
	
		  'md': '768px',
		  // => @media (min-width: 768px) { ... }
	
		  'lg': '1024px',
		  // => @media (min-width: 1024px) { ... }
	
		  'xl': '1366px',
		  // => @media (min-width: 1280px) { ... }
	
		  '2xl': '1440px',
		  // => @media (min-width: 1536px) { ... }
		}
	},
	plugins: [],
}
