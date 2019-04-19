import { enableProdMode } from '@angular/core';
import { platformBrowser } from '@angular/platform-browser';
enableProdMode();

import { AppModuleNgFactory } from './app.module.ngfactory';
platformBrowser().bootstrapModuleFactory(AppModuleNgFactory).catch(err => console.error(err));