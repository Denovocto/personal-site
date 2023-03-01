module.exports = function (eleventyConfig) {
    return {
        dir: {
            input: 'src',
            output: 'public',
        },
        templateFormats: ['html', 'md', 'pug'],
    };
};