import { Component, OnInit } from '@angular/core';

import { ProductWrapper } from './classes/Product';
import { GoodsService } from './services/goods.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  public goods: any[] = [];
  public countries: string[] = [];
  public types: string[] = [];

  constructor(public goodsService: GoodsService) {}

  ngOnInit(): void {
    let obj = this.goodsService.getGoods();

    this.goods = obj.goods;
    this.countries = obj.countries;
    this.types = obj.types;
  }
}
