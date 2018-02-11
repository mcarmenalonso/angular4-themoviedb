/**
 * This component will display the list posters of popular images
 */
import { Component, OnInit, OnDestroy } from "@angular/core";
import { MovieService } from "../shared/movie.service";
import { Movie } from "../shared/movie";
import { Actor } from "../shared/actor";
import { Subscription } from "rxjs/Subscription";
import { UtilService } from "../../shared/services/util.service";
import { ActivatedRoute, Router } from '@angular/router';

// TODO: add lazy loading for images
@Component({
  selector: ".bg-movie-actor",
  template: `
 
  <div class="col-md-5 datos-actor">
	  <div class="serie-on item" >
		  <div class="image-content">
				<img src="{{this._util.posterURL(actor.profile_path)}}" style="width:190px;"/>
			</div>
			<div class="info">
				<h3>{{actor.name}}</h3><br/>
				<p >Nacimiento:{{actor.birthday}}</p>
				<p>Lugar de nacimiento: {{actor.place_of_birth}}</p>
				
			</div>
    </div>
  </div>

  <div class="col-md-12" >
    <h2>Películas en las que ha participado {{actor.name}}</h2>
    <div  *ngFor="let movie of movies" >
      <div style="display: flex;border: 1px solid #e3e3e3;background-color:#ffffff; margin-bottom:10px;">
        <div style="display:flex;">
          <div style="width:150px;box-sizing:border-box;display:block;">
            <img src="{{this._util.posterURL(movie.poster_path)}}" style="width:150px;" alt="{{movie.title}}"/>
          </div>
          <div style="width: 80%;padding: 20px;box-sizing: border-box;display: flex;flex-wrap: wrap;align-content: space-between;">
          <h3><a href="/movies/{{movie.id}}">{{movie.title}}</a></h3><br/>
          <p >{{movie.overview}}</p>			  
         
          </div>
        </div>
      </div>
      
	 
				  
	
			
		
			
    
  </div>
  </div>
    
	
    <!-- we can use srcs    et for responsive images based on screen size -->

  <div *ngIf="!movies" class="padding-top-50 text-center">
    <i class="fa fa-spinner fa-pulse fa-3x fa-fw"></i>
    <span class="sr-only">Loading...</span>
  </div>

  `,
  styleUrls: ["./actor.component.css"]
})

export class MovieActorComponent implements OnInit, OnDestroy {

  private actor: Actor[] = [];
  private sub1: Subscription;
  private id: number;
  private movies: Movie[] = [];

  constructor(
    private _movie: MovieService,
    private _util: UtilService,
    private route: ActivatedRoute,
  ) { }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.id = +params['id'];
    });
    this.getActorInfo();
    this.getMoviesByActor();
  }
 

  ngOnDestroy(): void {
    this.sub1 && this.sub1.unsubscribe();
  }

  getActorInfo(page: number = 1): void {
    this.sub1 = this._movie.actor(this.id,page).subscribe((actor: Actor[]) => {
      // console.log("movies", movies);
      if (actor) {
        console.log(actor);
        this.actor = actor;
      }
    });
  }

  getMoviesByActor(page: number = 1): void {
    this.sub1 = this._movie.moviesByActor(this.id,page).subscribe((movies: Movie[]) => {
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
