const themes = ["night", "luxury", "light", "cupcake"];

const theme = themes[Math.floor(Math.random() * themes.length)];

document.querySelector("html").setAttribute("data-theme", theme);
