import { Component, OnInit } from '@angular/core';

import { NgModel } from '@angular/forms';
import { MoviesService } from './movies.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {
  filter= '';
  constructor(
    private movies: MoviesService,
  ) {}
  ngOnInit() {

  }

  search(filter) {
    this.movies.emitChange(filter);
  }
}
