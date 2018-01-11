import { HttpClient, HttpHeaders  } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable()
export class StorageService {
  private apiKey = '?api_key=1bded0cf5ec81699b719a0ab217e461e';
  private apiUrl = 'https://api.themoviedb.org/';

  constructor(
    private http: HttpClient,
  ) { }

  getList(category) {
    return this.http.get(this.apiUrl + '3/movie/' + category + this.apiKey);
  }

  getImageBaseUrl() {
   return this.http.get(this.apiUrl + '3/configuration' + this.apiKey);
  }

  search(query) {
    query = this.convertToSlug(query);
    return this.http.get(this.apiUrl + '3/search/movie/' + this.apiKey + '&query=' + query);
  }

  convertToSlug(string) {
    string = string.toLowerCase()
      .replace(/[^a-z0-9 -]/g, '')
      .replace(/\s+/g, '+')
      .replace(/-+/g, '+');
    return string;
  }
}
