import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {MoviesComponent} from "./pages/movies/movies.component";
import {MoviePage} from "./pages/movies/movie-page/movie-page.component";
import {TvShowsComponent} from "./pages/tv-shows/tv-shows.component";
import {TvShowPageComponent} from "./pages/tv-shows/tv-show-page/tv-show-page.component";

const routes: Routes = [
  {path: '', redirectTo: 'movies', pathMatch: 'full'},
  {path: 'movies', component: MoviesComponent},
  {path: 'movie-page/:id', component: MoviePage},
  {path: 'tv-shows', component: TvShowsComponent},
  {path: 'tv-show-page/:id', component: TvShowPageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
