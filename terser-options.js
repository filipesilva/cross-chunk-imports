const terserBaseOptions = {
  compress: {
    passes: 3,
    global_defs: {
      ngDevMode: false,
      ngI18nClosureMode: false,
    },
  }
};

// To use these options, pass --env.readable to webpack scripts or --environment readable to rollup
// ones.
const terserReadableOptions = {
  output: {
    // Comments and beautification cause sourcemaps to have large unmapped sections.
    comments: true,
    beautify: true,
  },
  mangle: false,
};

module.exports = { terserBaseOptions, terserReadableOptions};