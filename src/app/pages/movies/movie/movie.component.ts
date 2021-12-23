import {Component, Input, OnInit} from '@angular/core';
import {Movie} from "../../../models/movie.model";

@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.scss']
})
export class MovieComponent implements OnInit {
  @Input()
  movie!: Movie;

  imageBaseUrl = 'https://image.tmdb.org/t/p/w154/';
  posterPath = '';

  constructor() {
  }

  ngOnInit(): void {
    this.posterPath = `${this.imageBaseUrl}${this.movie.poster_path}`;
  }

}
