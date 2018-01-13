import { Injectable } from '@angular/core';
import { StorageService } from './storage.service';
import { Subject } from 'rxjs/Subject';

@Injectable()
export class MoviesService {
  listSorted = false;

  constructor(  ) { }

  private searchFilter = new Subject<any>();
  searchFilterEmited$ = this.searchFilter.asObservable();
  emitChange(change: any) {
      this.searchFilter.next(change);
  }

  sortByPopularity(list) {
    list.sort(
      (a, b) => {
        if (a.popularity > b.popularity) {
          return -1;
        }
        if (a.popularity < b.popularity) {
          return 1;
        }
      return 0 ;
      });
    }

  sortList(list) {
    if (!this.listSorted) {
      this.listSorted = true;
      list = list.sort(
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
      list = list.sort(
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
    return list;
  }
}
