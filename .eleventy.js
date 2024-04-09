const postcss = require("postcss");
const tailwindcss = require("tailwindcss");
const autoprefixer = require("autoprefixer");
const eleventyNavigationPlugin = require("@11ty/eleventy-navigation");
const markdownIt = require("markdown-it");
const markdownItAnchor = require("markdown-it-anchor");
const pluginTOC = require("eleventy-plugin-toc");
const outerElementClassInjector = require("./src/helpers/outer-element-class-injector.js");

module.exports = function (eleventyConfig) {
	eleventyConfig.addPlugin(eleventyNavigationPlugin);
	eleventyConfig.addPlugin(pluginTOC, {
		wrapper: "",
		wrapperClass: "",
		ul: true
	});
	eleventyConfig.addPassthroughCopy({ "src/**/*.js": "js" });
	eleventyConfig.addPassthroughCopy({ "src/**/*.css": "css" });
	eleventyConfig.addPassthroughCopy({ "src/assets/**/*.svg": "svg" });
	eleventyConfig.addWatchTarget("src/css/**/*.css");
	const md = markdownIt().use(markdownItAnchor);

	const defaultRender = md.renderer.rules.link_open ||function(tokens, idx, options, env, self) {
		return self.renderToken(tokens, idx, options);
	}
	md.renderer.rules.link_open = function (tokens, idx, options, env, self) {
		// If this is an internal link
		if (tokens[idx].attrGet('href').startsWith('#')) {
		  	// Get the original link
			let originalLink = tokens[idx].attrGet('href');
			// Encode the link with encodeURI
			let encodedLink = encodeURIComponent(originalLink.substring(1));
			// Set the encoded link as the new href
			tokens[idx].attrSet('href', '#' + encodedLink);
		}

		// Pass the token to the default renderer.
		return defaultRender(tokens, idx, options, env, self);
	};


	eleventyConfig.setLibrary("md", md);

	eleventyConfig.addFilter("outerElementClassInjector", outerElementClassInjector);
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
