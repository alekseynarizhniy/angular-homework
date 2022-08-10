import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Store } from '@ngrx/store';
import { ProductWrapper } from 'src/app/classes/product';

import { IMG_CLOSE } from "../../constants/links";

@Component({
  selector: 'app-dialog-product',
  templateUrl: './dialog-product.component.html',
  styleUrls: ['./dialog-product.component.scss']
})
export class DialogProductComponent{

  public closeIcon: string = IMG_CLOSE;

  constructor(
    public dialogProduct: MatDialogRef<DialogProductComponent>,
    @Inject(MAT_DIALOG_DATA) public data: ProductWrapper,
    public store: Store<any>
  ) {}

  public addProduct(event: any) {
    event.stopPropagation();
    this.store.dispatch({ type: 'add', newvalue: this.data });
  }

  public onClose() {
    this.dialogProduct.close();
  }
}
