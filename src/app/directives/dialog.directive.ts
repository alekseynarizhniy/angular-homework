import { Directive, HostListener, Input } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';

import { DialogProductComponent } from '../components/dialog-product/dialog-product.component';

import { ProductWrapper } from '../classes/Product';

@Directive({
  selector: '[appDialog]',
})
export class DialogDirective {
  @Input() appDialog!: ProductWrapper;

  @HostListener('click', ['$event']) onClick(event: any) {
    const dialogRef = this.dialog.open(DialogProductComponent, {
      width: '500px',
      data: this.appDialog,
    });

    event.target.removeEventListener('click', this.onClick);
  }

  constructor(public dialog: MatDialog) {}
}
