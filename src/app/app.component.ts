import { StorageService } from './storage.service';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {
  popularMovies = [];

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
}
