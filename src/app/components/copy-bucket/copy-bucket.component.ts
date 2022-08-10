import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { ProductWrapper } from 'src/app/classes/product';

@Component({
  selector: 'app-copy-bucket',
  templateUrl: './copy-bucket.component.html',
  styleUrls: ['./copy-bucket.component.scss']
})
export class CopyBucketComponent{
  public goodsArray: ProductWrapper[] = [];

  constructor(public store: Store<any>) {
    this.store.select('addGoods').subscribe((val) => (this.goodsArray = val));
  }

}
