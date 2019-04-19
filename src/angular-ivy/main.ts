import { enableProdMode } from '@angular/core';
import { platformBrowser } from '@angular/platform-browser';
enableProdMode();

import { AppModule } from './app.module';
platformBrowser().bootstrapModule(AppModule).catch(err => console.error(err));