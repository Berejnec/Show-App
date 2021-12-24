import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {tvShow} from "../../../models/tv-show.model";
import {TvShowService} from "../../../services/tv-show.service";

@Component({
  selector: 'app-tv-show-page',
  templateUrl: './tv-show-page.component.html',
  styleUrls: ['./tv-show-page.component.scss']
})
export class TvShowPageComponent implements OnInit {

  id!: number;
  tvShow!: tvShow;

  imageBaseUrl154 = 'https://image.tmdb.org/t/p/w154/';
  posterPath = '';
  imageBaseUrlOriginal = 'https://image.tmdb.org/t/p/original/';
  backdropPath = '';

  constructor(private _router: ActivatedRoute, private tvShowService: TvShowService) { }

  ngOnInit(): void {
    this.id = this._router.snapshot.params['id'];
    this.tvShowService.getShowById(this.id).subscribe(data => {
      this.tvShow = data;
      this.posterPath = `${this.imageBaseUrl154}${this.tvShow.poster_path}`;
      this.backdropPath = `${this.imageBaseUrlOriginal}${this.tvShow.backdrop_path}`;
    });
  }

}
