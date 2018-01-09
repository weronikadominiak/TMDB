import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { StorageService } from './storage.service';
import { MovieComponent } from './movie/movie.component';
import { MovieDetailsComponent } from './movie/movie-details/movie-details.component';

@NgModule({
  declarations: [
    AppComponent,
    MovieComponent,
    MovieDetailsComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
  ],
  providers: [
    StorageService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
