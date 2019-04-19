# cross-chunks-import

Compare behaviour of cross-chunk imports between Webpack and Rollup.

```
yarn
yarn test               # build all bundles
yarn ls                 # list all bundle sizes
yarn serve              # serve angular bundles to ensure they work
yarn sme dist/file.js   # check source maps
```

## src/simple

A simple example where a module uses a dynamic import to another module, and both import from a common module that is side effect free.

The common module contains two exports (`usedExport` and `unusedExport`), but after tree shaking it turns out the second export is not actually used.

Webpack retain `unusedExport`, but Rollup does not.

## src/angular

A Angular application using lazy routes, setup to use both View Engine (current compiler) and Ivy (upcoming compiler). This application makes heavy use of cross-chunk imports.

The VE version has a primary chunk of 292K with Webpack, and 378K with Rollup.

The Ivy version has a primary chunk of 343K with Webpack, and 292K with Rollup.

Rollup seems to generate bigger bundles than Webpack for VE, but the reverse is true for Ivy. Source maps show the difference is in retained `@angular/core` code, where Rollup retains a lot more in VE (246K) than in Ivy (157K). It's not clear why this is so.

## Mixed bundling

A way to mitigate Webpack's cross-chunk limitations is to pre-bundle using rollup, then bundle again using Webpack.

In most cases that doesn't make much sense. In this example the only result is that Webpack will reduce the number of final chunks, and apply its own module loader.

But this approach can be useful in cases where there's an existing Webpack setup with plugins/loaders and the app uses node modules that require advanced interop. This way you can still reap the benefit of Rollups ESM tree-shaking while using the rest of your Webpack pipeline.

The `mixed-*` `package.json` scripts in this repository use this approach.