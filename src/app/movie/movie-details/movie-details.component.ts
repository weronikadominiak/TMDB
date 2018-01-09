import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-movie-details',
  templateUrl: './movie-details.component.html',
  styleUrls: ['./movie-details.component.css']
})
export class MovieDetailsComponent implements OnInit {
  @Input() movie;
  imdbLink = 'http://www.imdb.com/title';

  constructor(
  ) { }

  ngOnInit() {
  }
}
