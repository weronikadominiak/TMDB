import { StorageService } from '../storage.service';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { NgModel } from '@angular/forms';
import { MoviesService } from '../movies.service';
import { ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-movies-list',
  templateUrl: './movies-list.component.html',
  styleUrls: ['./movies-list.component.css']
})
export class MoviesListComponent implements OnInit {
  moviesList = [];
  listName = 'popular';


  constructor(
    private storage: StorageService,
    private movies: MoviesService,
    private route: ActivatedRoute,
  ) {
    movies.searchFilterEmited$.subscribe(
      filter => {
          this.search(filter);
          this.listName = 'Search results of: ' + filter;
      });
  }

  ngOnInit() {
    this.route.params
    .subscribe(
      (params: Params) => {
        if (params.category === undefined) {
          this.getList('popular');
        } else {
        this.getList(params.category);
        }
      }
    );
  }

  getList(category) {
    this.storage.getList(category)
    .subscribe(
      (response) => {
        this.moviesList = response['results'];
        this.sortByPopularity(this.moviesList);
        this.listName = category[0].toUpperCase() + category.slice(1)
        .replace(/_/g, ' ');
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
