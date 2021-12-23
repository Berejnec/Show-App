import { Injectable } from '@angular/core';
import {environment} from "../../environments/environment";
import {HttpClient} from "@angular/common/http";
import {map} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class TvShowService {

  private apiKey = environment.apiKey;
  private apiUrl = 'https://api.themoviedb.org/3';

  constructor(private http: HttpClient) {
  }

  getPopularTvShows() {
    return this.http.get<any>(
      "https://api.themoviedb.org/3/tv/popular?api_key=" + this.apiKey + "&language=en-US&page=1"
    ).pipe(map(value => value['results']));
  }
}
