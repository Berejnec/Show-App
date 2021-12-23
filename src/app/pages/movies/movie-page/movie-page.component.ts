import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {MovieService} from "../../../services/movie.service";
import {Movie} from "../../../models/movie.model";

@Component({
  selector: 'app-movie-page',
  templateUrl: './movie-page.component.html',
  styleUrls: ['./movie-page.component.scss']
})
export class MoviePage implements OnInit {
  id!: number;
  movie!: Movie;

  imageBaseUrl154 = 'https://image.tmdb.org/t/p/w154/';
  posterPath = '';
  imageBaseUrlOriginal = 'https://image.tmdb.org/t/p/original/';
  backdropPath = '';

  constructor(private _router: ActivatedRoute, private movieService: MovieService) { }

  ngOnInit(): void {
    this.id = this._router.snapshot.params['id'];
    this.movieService.getMovieById(this.id).subscribe(data => {
      this.movie = data;
      this.posterPath = `${this.imageBaseUrl154}${this.movie.poster_path}`;
      this.backdropPath = `${this.imageBaseUrlOriginal}${this.movie.backdrop_path}`;
    });
  }

}
