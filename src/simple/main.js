import { usedExport, unusedExport } from './side-effect-free-modules/common';

function unusedExportConsumer() {
  console.log(unusedExport());
}

function main() {
  console.log(`main.js#main ${usedExport()}`);
  import('./lazy').then(m => console.log(m.lazyExport));
}

main();