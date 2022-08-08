import { Directive, HostListener, Input } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';

import { DialogProductComponent } from '../components/dialog-product/dialog-product.component';

import { ProductWrapper } from '../classes/product';

@Directive({
  selector: '[dialogProduct]',
})
export class DialogProductDirective {
  @Input() dialogProduct!: ProductWrapper;

  @HostListener('click', ['$event']) onClick(event: any) {
    const dialogRef = this.dialog.open(DialogProductComponent, {
      width: '500px',
      data: this.dialogProduct,
    });

    event.target.removeEventListener('click', this.onClick);
  }

  constructor(public dialog: MatDialog) {}
}
