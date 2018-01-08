import { StorageService } from '../storage.service';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.css']
})
export class MovieComponent implements OnInit {
  @Input() movie;
  imgBaseUrl;
  posterUrl: string;

  constructor(
    private storage: StorageService,
  ) { }

  ngOnInit() {
    this.imgBaseUrl = this.storage.getImageBaseUrl()
    .subscribe(
      (response) => {
        this.imgBaseUrl = response['images'].base_url;
        this.posterUrl = this.imgBaseUrl + 'w154' + this.movie.poster_path;
       }
    );
  }
}
