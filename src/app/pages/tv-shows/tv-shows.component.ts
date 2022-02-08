import { Component, OnInit } from '@angular/core';
import {TvShowService} from "../../services/tv-show.service";
import {TvShow} from "../../models/tv-show.model";

@Component({
  selector: 'app-tv-shows',
  templateUrl: './tv-shows.component.html',
  styleUrls: ['./tv-shows.component.scss']
})
export class TvShowsComponent implements OnInit {
  tvShows!: Array<TvShow>;

  constructor(private tvShowService: TvShowService) { }

  ngOnInit(): void {
    this.tvShowService.getPopularTvShows().subscribe(info => this.tvShows = info);
  }

}
