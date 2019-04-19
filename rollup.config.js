import resolve from 'rollup-plugin-node-resolve';
import { terser } from 'rollup-plugin-terser';
import buildOptimizer from '@angular-devkit/build-optimizer/src/build-optimizer/rollup-plugin.js';
const terserOptions = require('./terser-options');


export default {
  input: `./src/${process.env.app}/main.js`,
  output: {
    dir: `dist/${process.env.app}/rollup`,
    format: 'esm',
    sourcemap: true,
  },
  treeshake: true,
  plugins: [
    resolve(),
    buildOptimizer({
      angularCoreModules: [`node_modules/@angular/core/`],
      sideEffectFreeModules: [
        `node_modules/@angular/core/`,
        `node_modules/@angular/platform-browser/`,
        `node_modules/@angular/common/`,
        `node_modules/@angular/compiler/`,
        `node_modules/@angular/router/`,
        `node_modules/rxjs/`,
      ]
    }),
    terser({
      ...terserOptions.terserBaseOptions,
      ...(process.env.readable ? terserOptions.terserReadableOptions : {}),
    }),
  ],
};