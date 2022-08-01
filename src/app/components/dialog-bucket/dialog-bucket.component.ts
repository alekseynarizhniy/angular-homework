import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

import { ProductWrapper } from '../../classes/Product';

@Component({
  selector: 'app-dialog-bucket',
  templateUrl: './dialog-bucket.component.html',
  styleUrls: ['./dialog-bucket.component.scss'],
})
export class DialogBucketComponent {
  closeIcon: string = '../../../assets/images/cross-icon.svg';

  constructor(
    public dialogRef: MatDialogRef<DialogBucketComponent>,
    @Inject(MAT_DIALOG_DATA) public data: ProductWrapper[]
  ) {}

  getFullPrice() {
    let fullPrice = 0;

    this.data.forEach((item) => (fullPrice += item.price));

    return Math.ceil(fullPrice);
  }

  onClose() {
    this.dialogRef.close();
  }
}
