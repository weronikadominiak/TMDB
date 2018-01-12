import { StorageService } from './storage.service';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { NgModel } from '@angular/forms';
import { MoviesService } from './movies.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {
  moviesList = [];
  filter= '';


  constructor(
    private storage: StorageService,
    private movies: MoviesService,
  ) {}

  ngOnInit() {
    this.storage.getList('popular')
    .subscribe(
      (response) => {
        this.moviesList = response['results'];
      }
    );
  }

  search(query) {
    this.storage.search(query)
    .subscribe(
      (response) => {
        this.moviesList = response['results'];
        this.sortSearchResult(this.moviesList);
      }
    );
  }

  sortSearchResult(list) {
    this.movies.sortSearchResult(list);
    }

  sortList() {
    this.movies.sortList(this.moviesList);
  }

}
