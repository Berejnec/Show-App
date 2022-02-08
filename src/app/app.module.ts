import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {HttpClientModule} from "@angular/common/http";
import { MoviesComponent } from './pages/movies/movies.component';
import { MoviePage } from './pages/movies/movie-page/movie-page.component';
import { NavbarComponent } from './shared/navbar/navbar.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MovieComponent } from './pages/movies/movie/movie.component';
import { TvShowsComponent } from './pages/tv-shows/tv-shows.component';
import { TvShowComponent } from './pages/tv-shows/tv-show/tv-show.component';
import { TvShowPageComponent } from './pages/tv-shows/tv-show-page/tv-show-page.component';

@NgModule({
  declarations: [
    AppComponent,
    MoviesComponent,
    MoviePage,
    NavbarComponent,
    MovieComponent,
    TvShowsComponent,
    TvShowComponent,
    TvShowPageComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    LayoutModule,
    MatToolbarModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
