const path = require('path');
const webpack = require('webpack');
const TerserPlugin = require('terser-webpack-plugin');
const terserOptions = require('./terser-options');


module.exports = env => ({
  mode: 'production',
  devtool: 'source-map',
  entry: env.mixed
    ? `./dist/${env.app}/rollup/main.js`
    : `./src/${env.app}/main.js`,
  output: {
    path: path.resolve(__dirname, `dist/${env.app}/${env.mixed ? 'mixed' : 'webpack'}`)
  },
  // Pass --env.verbose to use verbose stats.
  stats: env.verbose ? 'verbose' : 'normal',
  optimization: {
    minimizer: [
      new TerserPlugin({
        sourceMap: true,
        terserOptions: {
          ...terserOptions.terserBaseOptions,
          ...(env.readable ? terserOptions.terserReadableOptions : {}),
        },
      }),
    ],
  },
  plugins: [
    new webpack.ContextReplacementPlugin(
      /[\/\\]@angular[\/\\]core[\/\\]/,
      path.resolve(__dirname), // path to your src
      {}
    )
  ],
  node: false,
  performance: {
    hints: false,
  },
  module: {
    rules: [
      {
        // Mark files inside `@angular/core` as using SystemJS style dynamic imports.
        // Removing this will cause deprecation warnings to appear.
        test: /[\/\\]@angular[\/\\]core[\/\\].+\.js$/,
        parser: { system: true },
      },
      {
        test: /\.js$/,
        loader: '@angular-devkit/build-optimizer/webpack-loader',
        options: { sourceMap: true },
      }
    ]
  }
});