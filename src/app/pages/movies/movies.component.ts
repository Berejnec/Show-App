import { Component, OnInit } from '@angular/core';
import {MovieService} from "../../services/movie.service";
import {Movie} from "../../models/movie.model";

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.scss']
})
export class MoviesComponent implements OnInit {

  movies!: Array<Movie>;

  constructor(private movieService: MovieService) { }

  ngOnInit(): void {
    this.movieService.getPopularMovies().subscribe(data => this.movies = data);
  }

}
