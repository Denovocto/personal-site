/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ["./src/**/*.{md,html,njk,js,svg}"],
	theme: {
		extend: {
			fontFamily: {
				"fira-mono": ["Fira Mono"],
			},
		},
	},
	daisyui: {
		themes: ['night', 'luxury', 'light', 'cupcake' ]
	},
	plugins: [require("@tailwindcss/typography"), require("daisyui")],
};
