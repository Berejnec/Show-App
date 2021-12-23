import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {MoviesComponent} from "./pages/movies/movies.component";
import {MoviePage} from "./pages/movies/movie-page/movie-page.component";
import {TvShowsComponent} from "./pages/tv-shows/tv-shows.component";

const routes: Routes = [
  {path: '', redirectTo: 'movies', pathMatch: 'full'},
  {path: 'movies', component: MoviesComponent},
  {path: 'movie-page/:id', component: MoviePage},
  {path: 'tv-shows', component: TvShowsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
