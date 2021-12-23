import { Injectable } from '@angular/core';
import {environment} from "../../environments/environment";
import {HttpClient} from "@angular/common/http";
import {map} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class MovieService {
  private apiKey = environment.apiKey;
  private apiUrl = 'https://api.themoviedb.org/3';
  private pathPopularMovies = '/movie/popular';
  private pathMovie = '/movie/'

  constructor(private http: HttpClient) { }

  getPopularMovies() {
    return this.http.get<any>(`${this.apiUrl}${this.pathPopularMovies}?api_key=${this.apiKey}&language=en-US&page=1`).pipe(
      map(value => value['results'])
    );
  }

  getMovieById(id: number) {
    return this.http.get<any>(`${this.apiUrl}${this.pathMovie}${id}?api_key=${this.apiKey}&language=en-US`);
  }
}
