// const pluginSass = require('eleventy-plugin-dart-sass');

module.exports = function (eleventyConfig) {
  // eleventyConfig.addPlugin(pluginSass, {
  //   // autoprefixer: true,
  //   // cleanCss: true,
  //   includePaths: './src/css/*.sass',
  //   outDir: './_site/css',
  // });
  // eleventyConfig.setUseGitIgnore(false);
  // eleventyConfig.addWatchTarget('./_site/css');
  eleventyConfig.addPassthroughCopy('src/css/*.css');
  eleventyConfig.addPassthroughCopy('src/js');
  eleventyConfig.addPassthroughCopy('src/img');
  return {
    dir: {
      input: 'src',
    },
  };
};
