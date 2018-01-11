import { StorageService } from './storage.service';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { NgModel } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {
  popularMovies = [];
  filter= '';
  listSorted = false;

  constructor(
    private storage: StorageService,
  ) {}

  ngOnInit() {
    this.storage.getList('popular')
      .subscribe(
        (response) => {
          this.popularMovies = response['results'];
        }
      );
  }

  search(query) {
    this.storage.search(query)
    .subscribe(
      (response) => {
        this.popularMovies = response['results'];
      }
    );
  }

  sortList() {
    if (!this.listSorted) {
      this.listSorted = true;
      this.popularMovies = this.popularMovies.sort(
      (a, b) => {
        a.title = a.title.toLowerCase();
        b.title = b.title.toLowerCase();
        if (a.title < b.title) {
          return -1;
        }
        if (a.title > b.title) {
          return 1;
        }
      return 0 ;
      });
    } else {
      this.listSorted = false;
      this.popularMovies = this.popularMovies.sort(
        (a, b) => {
          a.title = a.title.toLowerCase();
          b.title = b.title.toLowerCase();
          if (a.title > b.title) {
            return -1;
          }
          if (a.title < b.title) {
            return 1;
          }
        return 0 ;
      });
    }
  }
}
