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
	plugins: [require("@tailwindcss/typography"), require("daisyui")],
};
