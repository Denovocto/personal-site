import { themes } from "./base.js";

const dropdown = document.getElementById("themes-list");
const themeSelector = document.querySelector("#theme-selector");
let themeDropdownOpen = false;

const currentTheme = localStorage.getItem("theme");
for (const theme in themes) {
	const button = document.createElement("button");
	button.addEventListener("click", () => changeTheme(theme));
	button.classList.add(
		"outline-base-content",
		"overflow-hidden",
		"rounded-lg",
		"text-left",
	);
	button.setAttribute("data-set-theme", theme);

	const buttonDiv = document.createElement("div");
	buttonDiv.setAttribute("data-theme", theme);
	buttonDiv.classList.add(
		"bg-base-100",
		"text-base-content",
		"w-full",
		"cursor-pointer",
		"font-sans",
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
		"items-center",
	);

	const checkMark = document.createElement("span");
	checkMark.classList.add("material-symbols-outlined");

	currentTheme !== theme ? checkMark.classList.add("invisible") : null;
	checkMark.setAttribute("fill", "currentColor");

	checkMark.innerText = "check_circle";

	const divThemeName = document.createElement("div");
	divThemeName.classList.add("flex-grow", "text-sm", "font-bold");
	divThemeName.innerText = theme;

	const themeColors = document.createElement("div");
	themeColors.classList.add(
		"flex",
		"flex-shrink-0",
		"flex-wrap",
		"gap-1",
		"h-full",
	);
	var colorClasses = ["bg-primary", "bg-secondary", "bg-accent", "bg-neutral"];
	for (const color of colorClasses) {
		const colorPill = document.createElement("div");
		colorPill.classList.add(color, "w-2", "rounded");
		themeColors.appendChild(colorPill);
	}
	rowDiv.appendChild(checkMark);
	rowDiv.appendChild(divThemeName);
	rowDiv.appendChild(themeColors);
	grid.appendChild(rowDiv);
	buttonDiv.appendChild(grid);
	button.appendChild(buttonDiv);
	dropdown.appendChild(button);
}

function changeTheme(theme) {
	if (themes.hasOwnProperty(theme)) {
		const currentTheme = localStorage.getItem("theme");
		const currentThemeButton = document.querySelector(
			`button[data-set-theme="${currentTheme}"]`,
		);
		const currentThemeCheckMark = currentThemeButton.querySelector(
			"span.material-symbols-outlined",
		);
		currentThemeCheckMark.classList.add("invisible");
		localStorage.setItem("theme", theme);
		const newThemeButton = document.querySelector(
			`button[data-set-theme="${theme}"]`,
		);
		const newThemeCheckMark = newThemeButton.querySelector(
			"span.material-symbols-outlined",
		);
		newThemeCheckMark.classList.remove("invisible");
		document.querySelector("html").setAttribute("data-theme", theme);
	}
}

themeSelector.addEventListener("click", () => {
	if (themeDropdownOpen) {
		themeSelector.blur();
	}
	themeDropdownOpen = !themeDropdownOpen;
});
