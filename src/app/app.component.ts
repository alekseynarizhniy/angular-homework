import { Component } from '@angular/core';

import { ProductWrapper } from './classes/Product';
import { GROCERY } from './goods';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  country = 'Country';
  typeProduct = 'Type';
  goods: Array<ProductWrapper> = [];
  countries = new Set<string>();
  types = new Set<string>();
  filter: any = new Map();
  filteredGoods: Array<ProductWrapper> = [];

  constructor() {
    GROCERY.forEach((val) => {
      this.countries.add(val.country);
      this.types.add(val.type);
      this.goods.push(new ProductWrapper(val));
    });

    this.filteredGoods = this.goods;
  }

  getArray(iterable: Iterable<any> | ArrayLike<any>): Array<any> {
    return Array.from(iterable);
  }

  chosenElement(event: string, type: string) {
    if (event === 'ALL') {
      this.filter.delete(type);
    } else {
      this.filter.set(type, event);
    }

    this.goodsFilter();
  }

  goodsFilter() {
    this.filteredGoods = this.goods;

    if (this.filter.length !== 0) {
      for (let item of this.filter) {
        this.filteredGoods = this.filteredGoods.filter((val: any) =>
          val[item[0].toLowerCase()].includes(item[1])
        );
      }
    }
  }
}
