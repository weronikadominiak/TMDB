import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';


@Injectable()
export class StorageService {
  private apiKey = '?api_key=1bded0cf5ec81699b719a0ab217e461e';
  private apiUrl = 'https://api.themoviedb.org/';

  constructor(
    private http: HttpClient,
  ) { }

  getList() {
    return this.http.get(this.apiUrl + '4/list/1' + this.apiKey);
  }

  getImageBaseUrl () {
   return this.http.get(this.apiUrl + '3/configuration' + this.apiKey);
  }
}
