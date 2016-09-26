import { platformBrowser } from '@angular/platform-browser';
import { enableProdMode } from '@angular/core';
import { environment } from '../environments/environment';
import { AppModuleNgFactory } from '../aot/app/app.module.ngfactory'

if (environment.production) {
  enableProdMode();
}

platformBrowser().bootstrapModuleFactory(AppModuleNgFactory);


