/**
 * Application Module, register all different modules, and application components
 */

import { NgModule }      from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { SharedModule } from "./shared/shared.module";

import { AppComponent } from "./app.component";
import { MoviesModule } from "./movies/movies.module";

import { AppRoutingModule } from "./app-routing.module";


@NgModule({
  imports:      [ BrowserModule, MoviesModule, AppRoutingModule, SharedModule.forRoot() ],
  declarations: [
    AppComponent
  ],
  providers: [ ],
  bootstrap:    [ AppComponent ]
})

export class AppModule { }
