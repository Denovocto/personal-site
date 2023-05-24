import { themes } from "./base.js";

const dropdown = document.getElementById("themes-list");
for (const theme in themes) {
	const button = document.createElement("button");
	button.addEventListener("click", () => changeTheme(theme));
	button.classList.add(
		"outline-base-content",
		"overflow-hidden",
		"rounded-lg",
		"text-left",
		"[&_svg]:visible"
	);
	button.setAttribute("data-set-theme", theme);
	button.setAttribute("data-act-class", "[&_svg]:visible");

	const buttonDiv = document.createElement("div");
	buttonDiv.setAttribute("data-theme", theme);
	buttonDiv.classList.add(
		"bg-base-100",
		"text-base-content",
		"w-full",
		"cursor-pointer",
		"font-sans"
	);

	const grid = document.createElement("div");
	grid.classList.add("grid", "grid-cols-5", "grid-rows-3");

	const rowDiv = document.createElement("div");
	rowDiv.classList.add(
		"col-span-5",
		"row-span-3",
		"row-start-1",
		"flex",
		"gap-2",
		"py-3",
		"px-4",
		"items-center"
	);

	const svgCheckMark = document.createElement("svg");
	svgCheckMark.classList.add("w-3", "h-3", "invisible");
	svgCheckMark.setAttribute("xmlns", "http://www.w3.org/2000/svg");
	svgCheckMark.setAttribute("width", "16");
	svgCheckMark.setAttribute("height", "16");
	svgCheckMark.setAttribute("viewBox", "0 0 24 24");
	svgCheckMark.setAttribute("fill", "currentColor");

	const divThemeName = document.createElement("div");
	divThemeName.classList.add("flex-grow", "text-sm", "font-bold");
	divThemeName.innerText = theme;

	const themeColors = document.createElement("div");
	themeColors.classList.add(
		"flex",
		"flex-shrink-0",
		"flex-wrap",
		"gap-1",
		"h-full"
	);
	var colors = ["primary", "secondary", "accent", "neutral"];
	for (const color of colors) {
		const colorPill = document.createElement("div");
		colorPill.classList.add(`bg-${color}`, "w-2", "rounded");
		themeColors.appendChild(colorPill);
	}
	rowDiv.appendChild(svgCheckMark);
	rowDiv.appendChild(divThemeName);
	rowDiv.appendChild(themeColors);
	grid.appendChild(rowDiv);
	buttonDiv.appendChild(grid);
	button.appendChild(buttonDiv);
	dropdown.appendChild(button);
}

function changeTheme(theme) {
	if (themes.hasOwnProperty(theme)) {
		localStorage.setItem("theme", theme);
		document.querySelector("html").setAttribute("data-theme", theme);
	}
}
