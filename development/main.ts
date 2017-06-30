import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { enableProdMode, ViewEncapsulation } from '@angular/core';
import { AppModule } from './module';

platformBrowserDynamic().bootstrapModule(AppModule, [
  {
    defaultEncapsulation : ViewEncapsulation.None
  }
]);