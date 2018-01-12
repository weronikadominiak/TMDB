import { StorageService } from './storage.service';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { NgModel } from '@angular/forms';
import { MoviesService } from './movies.service';
import { PACKAGE_ROOT_URL } from '@angular/core/src/application_tokens';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {
  moviesList = [];
  listName: string;
  filter= '';

  constructor(
    private storage: StorageService,
    private movies: MoviesService,
  ) {}

  ngOnInit() {
    this.getList('popular');
  }

  getList(category) {
    this.listName = category[0].toUpperCase() + category.slice(1)
    .replace(/_/g, ' ');
    this.storage.getList(category)
    .subscribe(
      (response) => {
        this.moviesList = response['results'];
        this.sortByPopularity(this.moviesList);
      }
    );
  }

  search(query) {
    this.storage.search(query)
    .subscribe(
      (response) => {
        this.moviesList = response['results'];
        this.sortByPopularity(this.moviesList);
      }
    );
  }

  sortByPopularity(list) {
    this.movies.sortByPopularity(list);
    }

  sortList() {
    this.movies.sortList(this.moviesList);
  }

}
