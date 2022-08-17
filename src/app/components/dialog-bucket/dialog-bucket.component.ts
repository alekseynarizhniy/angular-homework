import { Component, OnDestroy, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { Store } from '@ngrx/store';
import { Subscription } from 'rxjs';

import { GoodsService } from 'src/app/services/goods.service';

import { ProductWrapper } from '../../classes/product';

import { IMG_CLOSE } from '../../constants/links';

@Component({
  selector: 'app-dialog-bucket',
  templateUrl: './dialog-bucket.component.html',
  styleUrls: ['./dialog-bucket.component.scss'],
})
export class DialogBucketComponent implements OnInit, OnDestroy {
  public closeIcon: string = IMG_CLOSE;
  public displayedColumns: string[] = [
    'position',
    'name',
    'price',
    'quantity',
    'image',
    'remove',
  ];
  public goods: ProductWrapper[] = [];
  private subscriptions: Subscription[] = [];
  public bucketGoods: ProductWrapper[] = [];

  constructor(
    private dialogBucket: MatDialogRef<DialogBucketComponent>,
    private goodsService: GoodsService,
    private store: Store<any>
  ) {}

  ngOnInit(): void {
    const goodsSubscription = this.goodsService
      .getGoods()
      .subscribe((goods: ProductWrapper[]) => {
        this.goods = goods;
      });

    this.subscriptions.push(goodsSubscription);

    const storeSubscription = this.store
      .select('addGoods')
      .subscribe((goods: ProductWrapper[]) => (this.bucketGoods = goods));

    this.subscriptions.push(storeSubscription);
  }

  ngOnDestroy(): void {
    this.subscriptions.forEach((subscription) => subscription.unsubscribe());
  }

  public getFullPrice(): Number {
    let fullPrice = 0;

    this.bucketGoods.forEach(
      (item) => (fullPrice += item.price * item.quantity)
    );

    return Math.ceil(fullPrice);
  }

  public acceptOrder(): void {
    this.bucketGoods.forEach((product: ProductWrapper) => {
      let currentProduct = this.goods[product.id - 1];

      currentProduct.quantity -= product.quantity;

      this.goodsService.updateProduct(currentProduct);
    });

    this.clearBucker();
    this.dialogBucket.close();
  }

  public removeProduct(product: ProductWrapper): void {
    this.store.dispatch({ type: 'remove', newvalue: product });
  }

  public clearBucker(): void {
    this.store.dispatch({ type: 'clear', newvalue: {} });
  }

  public onClose(): void {
    this.dialogBucket.close();
  }
}
