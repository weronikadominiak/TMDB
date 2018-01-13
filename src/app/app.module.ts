import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { StorageService } from './storage.service';
import { MovieComponent } from './movie/movie.component';
import { MovieDetailsComponent } from './movie/movie-details/movie-details.component';
import { SearchPipe } from './search.pipe';
import { MoviesService } from './movies.service';
import { MoviesListComponent } from './movies-list/movies-list.component';

const routes: Routes = [
  {path: '', component: MoviesListComponent},
  {path: ':category', component: MoviesListComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    MovieComponent,
    MovieDetailsComponent,
    SearchPipe,
    MoviesListComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot(routes),
  ],
  providers: [
    StorageService,
    MoviesService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
