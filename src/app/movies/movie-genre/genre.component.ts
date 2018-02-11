/**
 * This component will display the list posters of popular images
 */
import { Component, OnInit, OnDestroy } from "@angular/core";
import { MovieService } from "../shared/movie.service";
import { Movie } from "../shared/movie";
import { Subscription } from "rxjs/Subscription";
import { UtilService } from "../../shared/services/util.service";
import { ActivatedRoute, Router } from '@angular/router';

// TODO: add lazy loading for images
@Component({
  selector: ".bg-movie-list-bygenre",
  template: `
 
  <div *ngIf="movies;" class="img-wrapper">
    <div *ngIf="movies.length == 0" class="padding-top-50 text-center">
        <span>No se encontraron resultados</span>
    </div>

    <div  *ngFor="let movie of movies"  >
		  <div class="col-md-5 serie-on item" >
			  <div class="image-content">
				  <img src="{{this._util.posterURL(movie.poster_path)}}" style="width:190px;" alt="{{movie.title}}"/>
			  </div>
			  <div class="info">
				  <h3>{{movie.title}}</h3><br/>
				  <p class="overview">{{movie.overview}}</p>
				  <p class="masinfo"><a href="/movies/{{movie.id}}">Más información</a></p>
			  </div>
      </div>
    </div>	
    <!-- we can use srcs    et for responsive images based on screen size -->

      
   
 
  <div *ngIf="!movies" class="padding-top-50 text-center">
    <i class="fa fa-spinner fa-pulse fa-3x fa-fw"></i>
    <span class="sr-only">Loading...</span>
  </div>

  `,
  styleUrls: ["./genre.component.css"]
})

export class MovieListGenreComponent implements OnInit, OnDestroy {

  private movies: Movie[] = [];
  private sub1: Subscription;
  private id: number;

  constructor(
    private _movie: MovieService,
    private _util: UtilService,
    private route: ActivatedRoute,
  ) { }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.id = +params['id'];
    });
    this.getMoviesByGenre();
  }
 

  ngOnDestroy(): void {
    this.sub1 && this.sub1.unsubscribe();
  }

  getMoviesByGenre(page: number = 1): void {
    this.sub1 = this._movie.genres(this.id,page).subscribe((movies: Movie[]) => {
      // console.log("movies", movies);
      if (movies) {
        this.movies.push(...movies);
      }
    });
  }

  getDetails(movie: Movie): void {
    alert("Quiere ver los detalles de la película ID: " + movie.id + " Con el título:" + movie.title );
  }
}
