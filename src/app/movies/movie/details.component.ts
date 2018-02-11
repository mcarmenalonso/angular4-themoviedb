/**
 * This component will display details of an image.
 */

import { Component, OnInit, OnDestroy } from "@angular/core";
import { MovieService } from "../shared/movie.service";
import { Movie } from "../shared/movie";
import { Cast, InfoReparto } from "../shared/cast";
import { Subscription } from "rxjs/Subscription";
import { UtilService } from "../../shared/services/util.service";
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: ".bg-movie",
  templateUrl: "./details.component.html",
  styleUrls: ["./details.component.css"]
})

export class MovieDetailsComponent implements OnInit, OnDestroy  {
  private movie: Movie;
  private sub1: Subscription;
  private id: number;
  private infoReparto: InfoReparto;
  

  constructor(
    private _movie: MovieService,
    private _util: UtilService, 
    private route: ActivatedRoute,

  ) { }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.id = +params['id'];
    });
    this.getMovie();
    this.getCasting();
  }

  ngOnDestroy(): void {
    this.sub1 && this.sub1.unsubscribe();
  }

  getMovie(): void {
    this.sub1 = this._movie.movie(this.id).subscribe((movie: Movie) => {
      // console.log("movies", movies);this.
      if (movie) {
        this.movie = movie;
      }
      else 
        this.movie.title="kk";
    });
  }

  getCasting(): void {
    this.sub1 = this._movie.cast(this.id).subscribe((infoReparto: InfoReparto) => {
      // console.log("movies", movies);this.
      if (infoReparto) {
      
        this.infoReparto = infoReparto;
      }
    });
      
  }

 
}
