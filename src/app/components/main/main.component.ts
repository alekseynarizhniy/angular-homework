import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';

import { ProductWrapper } from '../../classes/Product';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss'],
})
export class MainComponent implements OnInit {
  public country = 'Country';
  public typeProduct = 'Type';
  public goodsLength: number = 0;
  private filter: any = new Map();
  public filteredGoods: Array<ProductWrapper> = [];
  public showGoods: Array<ProductWrapper> = [];

  @Input() countries: any;

  @Input() types: any;

  @Input() goods!: Array<ProductWrapper>;

  @Output() itemOutput = new EventEmitter<ProductWrapper>();

  ngOnInit(): void {
    this.filteredGoods = this.goods;
    this.goodsLength = this.filteredGoods.length;
    this.showGoods = this.filteredGoods.slice(0, 5);
  }

  public chosenElement(event: string, type: string) {
    if (event === 'ALL') {
      this.filter.delete(type);
    } else {
      this.filter.set(type, event);
    }

    this.goodsFilter();
  }

  private goodsFilter() {
    this.filteredGoods = this.goods;

    if (this.filter.length !== 0) {
      for (let item of this.filter) {
        this.filteredGoods = this.filteredGoods.filter((val: any) =>
          val[item[0].toLowerCase()].includes(item[1])
        );
      }
    }

    this.showGoods = this.filteredGoods.slice(0, 5);
  }

  public sendItem(value: ProductWrapper) {
    this.itemOutput.emit(value);
  }

  public changePage(event: any) {
    const startIndex = event.pageIndex * event.pageSize;
    let lastIndex = startIndex + event.pageSize;

    if(lastIndex > this.goodsLength) lastIndex = this.goodsLength;

    this.showGoods = this.filteredGoods.slice(startIndex, lastIndex);
  }
}
