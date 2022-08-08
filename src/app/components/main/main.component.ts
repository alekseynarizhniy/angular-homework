import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { FilterProductService } from 'src/app/services/filter-product.service';
import { SortProductService } from 'src/app/services/sort-product.service';

import { ProductWrapper } from '../../classes/product';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss'],
})
export class MainComponent implements OnInit {
  public country = 'Country';
  public typeProduct = 'Type';
  public sort = 'Sort';
  public sortProduct = ['Sort From A to Z', 'Sort From Z to A'];
  public goodsLength: number = 0;
  public pageSize:number = 5;
  public filteredGoods: ProductWrapper[] = [];
  public showGoods: ProductWrapper[] = [];

  @Input() countries!: string[];

  @Input() types!: string[];

  @Input() goods!: ProductWrapper[];

  @ViewChild('paginator') paginator!: MatPaginator;


  constructor(private fltr: FilterProductService, private srt: SortProductService){}

  ngOnInit(): void {
    this.filteredGoods = this.goods;
    this.goodsLength = this.filteredGoods.length;
    this.showGoods = this.filteredGoods.slice(0, this.pageSize);
    this.fltr.addGoods(this.goods);
  }

  public filterElement(event: string, type: string) {
    this.filteredGoods = this.fltr.goodsFilter(type, event);
    this.showGoods = this.filteredGoods.slice(0, this.pageSize);
    this.paginator.firstPage();
  }

  public sortElement(event: string){
    if(event === this.sortProduct[0]){
      this.filteredGoods = this.srt.sortNameAZ(this.filteredGoods);
    }else if(event === this.sortProduct[1]){
      this.filteredGoods = this.srt.sortNameZA(this.filteredGoods);
    }

    this.showGoods = this.filteredGoods.slice(0, this.pageSize);
    this.paginator.firstPage();
  }

  public changePage(event: any) {
    const startIndex = event.pageIndex * event.pageSize;
    let lastIndex = startIndex + event.pageSize;

    this.pageSize = event.pageSize;

    if (lastIndex > this.goodsLength) lastIndex = this.goodsLength;

    this.showGoods = this.filteredGoods.slice(startIndex, lastIndex);
  }
}
