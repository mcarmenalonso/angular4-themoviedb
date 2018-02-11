/**
 * This service will make API calls to theMovieDB
 */
import { Injectable } from "@angular/core";

import { Observable } from "rxjs/Observable";
import { Http } from "@angular/http";
import { Movie } from "./movie";
import { Actor } from "./actor";
import { Cast, InfoReparto } from "./cast";
import { UtilService } from "../../shared/services/util.service";

@Injectable()
export class MovieService {

  private baseURL: string;
  private popularURL: string;
  private latestURL: string;
  private genresURL: string;
  private actorURL: string;
  private moviesByActorURL: string;

  constructor (
    private _http: Http,
    private _util: UtilService
  ) {
    this.baseURL = `${this._util.theMovieDbURL}/movie`;
    this.popularURL = "/popular";
    this.latestURL = "/latest";
    this.genresURL ="https://api.themoviedb.org/3/discover/movie?with_genres=";
    this.actorURL = "https://api.themoviedb.org/3/person/";
    this.moviesByActorURL="http://api.themoviedb.org/3/discover/movie?with_cast=";
  }

  movies(page: number = 1, type: string = "all", language:string = "es"): Observable<Movie[]> {
    let url: string = `${this.baseURL}`;
    if (type !== "all") {
      url += this[`${type}URL`];
    }
    url += `?api_key=${this._util.apiKey}`+'&language='+language;
    url += `&page=${page}`;
    return this._http.get(url).map(response => response.json().results).catch(err => {
      return Observable.of(null);
    });
  }

  movie(id: number, language:string = "es"):Observable<Movie> {
    let url: string = `${this.baseURL}`;
    url += `/${id}`;
    url += `?api_key=${this._util.apiKey}`+'&language='+language;
    
    return this._http.get(url).map(response => response.json()).catch(err => {
      return Observable.of(null);
    });
  }

  cast(id: number, language:string = "es"):Observable<InfoReparto> {
    let url: string = `${this.baseURL}`;
    url += `/${id}`+'/casts';
    url += `?api_key=${this._util.apiKey}`+'&language='+language;
    
    return this._http.get(url).map(response => response.json()).catch(err => {
      return Observable.of(null);
    });
  }

  genres(id:number, page: number = 1, language:string = "es"): Observable<Movie[]> {
    let url: string = `${this.genresURL}`;

    url += id +`&api_key=${this._util.apiKey}`+'&language='+language;
    url += `&page=${page}`;
    return this._http.get(url).map(response => response.json().results).catch(err => {
      return Observable.of(null);
    });
  }

  actor(id:number, page: number = 1, language:string = "es"): Observable<Actor[]> {
    let url: string = `${this.actorURL}`+id+`?api_key=${this._util.apiKey}`+'&language='+language+`&page=${page}`;

    
    return this._http.get(url).map(response => response.json()).catch(err => {
      return Observable.of(null);
    });
  }

  moviesByActor(id:number, page: number = 1, language:string = "es"): Observable<Movie[]> {
    let url: string = `${this.moviesByActorURL}`;
    url += id +"&sort_by=release_date.asc"+`&api_key=${this._util.apiKey}`+'&language='+language;
    url += `&page=${page}`;
    return this._http.get(url).map(response => response.json().results).catch(err => {
      return Observable.of(null);
    });
  }

}
