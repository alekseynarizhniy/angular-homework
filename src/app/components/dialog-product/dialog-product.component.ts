import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Store } from '@ngrx/store';
import { ProductWrapper } from 'src/app/classes/Product';

@Component({
  selector: 'app-dialog-product',
  templateUrl: './dialog-product.component.html',
  styleUrls: ['./dialog-product.component.scss']
})
export class DialogProductComponent{

  public closeIcon: string = '../../../assets/images/cross-icon.svg';

  constructor(
    public dialogRef: MatDialogRef<DialogProductComponent>,
    @Inject(MAT_DIALOG_DATA) public data: ProductWrapper,
    public store: Store<any>
  ) {}

  public addProduct(event: any) {
    event.stopPropagation();
    this.store.dispatch({ type: 'add', newvalue: this.data });
  }

  public onClose() {
    this.dialogRef.close();
  }
}
