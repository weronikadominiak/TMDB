import { StorageService } from '../storage.service';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.css']
})
export class MovieComponent implements OnInit {
  @Input() movie;
  movieDetails = {};
  imgBaseUrl: string;
  posterUrl: string;
  display = false;
  displayButton = 'Display details';

  constructor(
    private storage: StorageService,
  ) { }

  ngOnInit() {
    this.storage.getList(this.movie.id)
    .subscribe(
      (response) => {
        this.movieDetails = response;
       }
    );

    if (this.movie.poster_path === null) {
      this.posterUrl = 'http://via.placeholder.com/154x218?text=Not+avaliable';
    } else {
      this.storage.getImageBaseUrl()
      .subscribe(
        (response) => {
          this.imgBaseUrl = response['images'].base_url;
          this.posterUrl = this.imgBaseUrl + 'w154' + this.movie.poster_path;
         }
      );
    }
  }

  changeButton() {
    this.display = !this.display;
    if (this.display === true) {
      this.displayButton = 'Hide details';
    } else {
      this.displayButton = 'Display details';
    }
  }
}
