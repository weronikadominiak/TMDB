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
    this.popular();
  }

  popular() {
    this.listName = 'Popular';
    this.storage.getList('popular')
    .subscribe(
      (response) => {
        this.moviesList = response['results'];
      }
    );
  }

  topRated() {
    this.listName = 'Latest';
    this.storage.getList('top_rated')
    .subscribe(
      (response) => {
        this.moviesList = response['results'];
      }
    );
  }

  upcoming() {
    this.listName = 'Upcoming';
    this.storage.getList('upcoming')
    .subscribe(
      (response) => {
        this.moviesList = response['results'];
      }
    );
  }

  nowPlaying() {
    this.listName = 'Now playing';
    this.storage.getList('now_playing')
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
