/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ["./src/**/*.{md,html,njk}"],
	theme: {
		extend: {},
	},
	plugins: [require("@tailwindcss/typography"), require("daisyui")],
};
