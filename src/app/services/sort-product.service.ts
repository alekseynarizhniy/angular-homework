import { Injectable } from '@angular/core';

@Injectable()
export class SortProductService {
  sortNameAZ(arr: any[]): any[] {
    return arr.sort((obj1: any, obj2: any) =>
      obj1.name > obj2.name ? 0 : obj1.name < obj2.name ? -1 : 0
    );
  }

  sortNameZA(arr: any[]): any[] {
    return arr.sort((obj1: any, obj2: any) =>
      obj1.name < obj2.name ? 0 : obj1.name > obj2.name ? -1 : 0
    );
  }
}
