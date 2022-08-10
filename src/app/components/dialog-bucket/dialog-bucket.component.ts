import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

import { ProductWrapper } from '../../classes/product';

import { IMG_CLOSE } from '../../constants/links';

@Component({
  selector: 'app-dialog-bucket',
  templateUrl: './dialog-bucket.component.html',
  styleUrls: ['./dialog-bucket.component.scss'],
})
export class DialogBucketComponent {
  public closeIcon: string = IMG_CLOSE;

  constructor(
    public dialogBucket: MatDialogRef<DialogBucketComponent>,
    @Inject(MAT_DIALOG_DATA) public data: ProductWrapper[]
  ) {}

  public getFullPrice() {
    let fullPrice = 0;

    this.data.forEach((item) => (fullPrice += item.price));

    return Math.ceil(fullPrice);
  }

  public onClose() {
    this.dialogBucket.close();
  }
}
