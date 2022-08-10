import { Injectable } from '@angular/core';
import { ProductWrapper } from '../classes/product';

@Injectable()
export class FilterProductService {
  private ALL_VALUE:string = 'ALL';
  private goods: ProductWrapper[] = [];
  private filter: any = new Map();

  addGoods(productArr:ProductWrapper[]){
    this.goods = productArr;
  }

  goodsFilter(type: string, value: string ): ProductWrapper[] {

    if (value === this.ALL_VALUE) {
      this.filter.delete(type);
    } else {
      this.filter.set(type, value);
    }

    let filteredGoods: ProductWrapper[] = this.goods;

    if (this.filter.length !== 0) {
      for (let item of this.filter) {
        filteredGoods = filteredGoods.filter((val: any) =>
          val[item[0].toLowerCase()].includes(item[1])
        );
      }
    }

   return filteredGoods;
  }

}
