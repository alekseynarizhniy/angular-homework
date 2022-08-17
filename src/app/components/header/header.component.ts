import { Component, OnDestroy } from '@angular/core';
import { Store } from '@ngrx/store';
import { SubscriptionLike } from 'rxjs';

import { ProductWrapper } from '../../classes/product';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnDestroy{
  private subscription!: SubscriptionLike;
  public goodsArray: ProductWrapper[] = [];


  constructor(private store: Store<any>) {
    this.subscription = this.store
      .select('addGoods')
      .subscribe((goods: ProductWrapper[]) => {
        this.goodsArray = goods;
      });
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}
