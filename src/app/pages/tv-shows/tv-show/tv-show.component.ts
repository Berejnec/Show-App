import {Component, Input, OnInit} from '@angular/core';
import { tvShow } from "../../../models/tv-show.model";

@Component({
  selector: 'app-tv-show',
  templateUrl: './tv-show.component.html',
  styleUrls: ['./tv-show.component.scss']
})
export class TvShowComponent implements OnInit {
  @Input() tvShow!: tvShow;
  imageBaseUrl = 'https://image.tmdb.org/t/p/w154/';
  posterPath = '';
  constructor() { }

  ngOnInit(): void {
    this.posterPath = `${this.imageBaseUrl}${this.tvShow.poster_path}`;
  }

}
