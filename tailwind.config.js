/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
		'./pages/**/*.{js,ts,jsx,tsx,mdx}',
		'./components/**/*.{js,ts,jsx,tsx,mdx}',
		'./app/**/*.{js,ts,jsx,tsx,mdx}',
	],
	theme: {
		extend: {
			colors: {
				'cream': '#F1EFEC',
				'navy': '#123458',
				'beige': '#D4C9BE',
				'black': '#030303',
			},
			fontFamily: {
				'garamond': ['EB Garamond', 'serif'],
				'playfair': ['Playfair Display', 'serif'],
			},
		},
	},
	plugins: [],
}