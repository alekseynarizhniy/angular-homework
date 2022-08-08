import { Injectable } from '@angular/core';

@Injectable()
export class SortProductService {

  sortNameAZ(arr: any[]): any[] {
    return arr.sort((obj1: any, obj2: any) => {
      if (obj1.name > obj2.name) {
        return 1;
      } else if (obj1.name < obj2.name) {
        return -1;
      } else {
        return 0;
      }
    });
  }

  sortNameZA(arr: any[]): any[] {
    return arr.sort((obj1: any, obj2: any) => {
      if (obj1.name < obj2.name) {
        return 1;
      } else if (obj1.name > obj2.name) {
        return -1;
      } else {
        return 0;
      }
    });
  }
}
