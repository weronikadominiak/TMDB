import { StorageService } from './storage.service';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  array = [];
  imgBaseUrl;
  constructor(
    private storage: StorageService,
  ) {}

  ngOnInit() {
    this.storage.getList()
      .subscribe(
        (response) => {
          this.array = response['results'];
          console.log(this.array);
        }
      );

    this.imgBaseUrl = this.storage.getImageBaseUrl()
    .subscribe(
      (response) => {
        this.imgBaseUrl = response['images'].base_url;
       }
    );
  }
}
