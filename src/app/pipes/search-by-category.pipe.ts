import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'searchByCategory'
})
export class SearchByCategoryPipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    return null;
  }

}
