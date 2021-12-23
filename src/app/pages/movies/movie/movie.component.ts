import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {MovieService} from "../../../services/movie.service";
import {Movie} from "../../../models/movie.model";

@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.scss']
})
export class MovieComponent implements OnInit {
  id!: number;
  movie!: Movie;

  constructor(private _router: ActivatedRoute, private movieService: MovieService) { }

  ngOnInit(): void {
    this.id = this._router.snapshot.params['id'];
    this.movieService.getMovieById(this.id).subscribe(data => this.movie = data);
  }

}
