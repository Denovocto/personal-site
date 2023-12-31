const postcss = require("postcss");
const tailwindcss = require("tailwindcss");
const autoprefixer = require("autoprefixer");
const eleventyNavigationPlugin = require("@11ty/eleventy-navigation");

module.exports = function (eleventyConfig) {
	eleventyConfig.addPlugin(eleventyNavigationPlugin);
	eleventyConfig.addPassthroughCopy({ "src/**/*.js": "js" });
	eleventyConfig.addPassthroughCopy({ "src/**/*.css": "css" });
	eleventyConfig.addPassthroughCopy({ "src/assets/**/*.svg": "svg" });
	eleventyConfig.addWatchTarget("src/css/**/*.css");
	eleventyConfig.addNunjucksAsyncFilter("postcss", (cssCode, done) => {
		postcss([tailwindcss(require("./tailwind.config.js")), autoprefixer()])
			.process(cssCode)
			.then(
				(r) => done(null, r.css),
				(e) => done(e, null)
			);
	});
	return {
		passthroughFileCopy: true,
		dir: {
			input: "src",
			output: "public",
		},
		templateFormats: ["html", "md", "njk"],
	};
};
