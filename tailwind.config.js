/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ["./src/**/*.{md,html,njk,js,svg}"],
	theme: {
		extend: {},
	},
	plugins: [require("@tailwindcss/typography"), require("daisyui")],
};
