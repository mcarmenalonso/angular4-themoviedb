/**
 * Register Routes for movie related components
 */
import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";

import { MovieListComponent } from "./movie-list/list.component";
import { MovieDetailsComponent } from "./movie/details.component";
import { MovieListGenreComponent } from "./movie-genre/genre.component";
import { MovieActorComponent } from "./movie-actor/actor.component";

@NgModule({
  imports: [
    RouterModule.forRoot([
      {
        path: "movies",
        component: MovieListComponent,
      },
      {
        path: "movies/:id",
        component: MovieDetailsComponent,
      },
      {
        path: "movies/genre/:id",
        component: MovieListGenreComponent,
      },
      {
        path: "movies/actor/:id",
        component: MovieActorComponent,
      },
    ])
  ],
  exports: [ RouterModule ]
})
export class MoviesRoutingModule { }
