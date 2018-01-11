import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'search'
})
export class SearchPipe implements PipeTransform {
  lowerTitle: string;

  transform(value: any, filter: string): any {
    if (filter === '') {
      return value;
    }
    const resultArray = [];
    for (const movie of value) {
      this.lowerTitle = movie.title.toLowerCase();
      if (this.lowerTitle.includes(filter.toLowerCase())) {
        resultArray.push(movie);
      }
    }
    return resultArray;
  }

}
