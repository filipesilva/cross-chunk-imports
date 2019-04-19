import { usedExport, unusedExport } from './side-effect-free-modules/common';

export function lazyExport() {
  return `lazy.js#lazyExport ${usedExport()}`;
}

function unusedExportConsumer() {
  console.log(unusedExport());
}