/**
 * This file will boostrap the application module with Angular framework
 */
import { enableProdMode } from "@angular/core";
import { platformBrowserDynamic } from "@angular/platform-browser-dynamic";
import { AppModule } from "./app/app.module";
import './custom.css';

if (app.environment === "production") {
  enableProdMode();
}

platformBrowserDynamic().bootstrapModule(AppModule);
