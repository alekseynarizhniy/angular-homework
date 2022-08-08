import { Component, OnInit } from '@angular/core';

import { ProductWrapper } from './classes/product';
import { DataService } from './services/data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  private url:string = 'goods';
  public goods: Array<ProductWrapper> = [];
  public countries: string[] = [];
  public types: string[] = [];

  constructor(public goodsService: DataService) {}

 ngOnInit(){

    this.goodsService.getData(this.url).subscribe((val) => {
      let setCountries = new Set<string>();
      let setTypes = new Set<string>();

      this.goods = val;
      this.goods.forEach(val => {
        setCountries.add(val.country);
        setTypes.add(val.type);
      });

      this.countries = Array.from(setCountries);
      this.types = Array.from(setTypes);
    });

  }

}
