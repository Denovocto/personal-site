const postcss = require('postcss');
const tailwindcss = require('tailwindcss');
const autoprefixer = require('autoprefixer');

module.exports = function (eleventyConfig) {
    eleventyConfig.addNunjucksAsyncFilter('postcss', (cssCode, done) => {
        postcss([tailwindcss(require('./tailwind.config.js')), autoprefixer()])
          .process(cssCode)
          .then(
            (r) => done(null, r.css),
            (e) => done(e, null)
          );
      });
    eleventyConfig.addWatchTarget('src/css/**/*.css');
    return {
        dir: {
            input: 'src',
            output: 'public',
        },
        templateFormats: ['html', 'md', 'njk'],
    };
};