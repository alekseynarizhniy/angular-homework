import { Injectable } from '@angular/core';

import { GROCERY } from '../goods';
import { ProductWrapper } from '../classes/Product';

@Injectable()
export class GoodsService {
  getGoods() {
    let goods: Array<ProductWrapper> = [];
    let setCountries = new Set<string>();
    let setTypes = new Set<string>();

    GROCERY.forEach((val) => {
      setCountries.add(val.country);
      setTypes.add(val.type);
      goods.push(new ProductWrapper(val));
    });

    let obj = {
      countries: Array.from(setCountries),
      types: Array.from(setTypes),
      goods: goods,
    };
    return obj;
  }
}
