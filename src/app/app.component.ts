import { StorageService } from './storage.service';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {
  movies = [];

  constructor(
    private storage: StorageService,
  ) {}

  ngOnInit() {
    this.storage.getList()
      .subscribe(
        (response) => {
          this.movies = response['results'];
        }
      );
  }
}
