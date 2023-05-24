export const themes = {
	night: "night",
	luxury: "luxury",
	light: "light",
	cupcake: "cupcake",
};

const storedTheme = localStorage.getItem("theme");

const defaultTheme = themes.night;

if (storedTheme !== null && themes.hasOwnProperty(storedTheme)) {
	document.querySelector("html").setAttribute("data-theme", storedTheme);
} else {
	const theme = defaultTheme;
	localStorage.setItem("theme", theme);
	document.querySelector("html").setAttribute("data-theme", theme);
}
