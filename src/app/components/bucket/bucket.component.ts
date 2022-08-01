import { Component, Input } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';

import { ProductWrapper } from '../../classes/Product';
import { DialogBucketComponent } from '../dialog-bucket/dialog-bucket.component';

@Component({
  selector: 'app-bucket',
  templateUrl: './bucket.component.html',
  styleUrls: ['./bucket.component.scss'],
})
export class BucketComponent {
  bucket: string = '../../../assets/images/bucket.png';

  @Input() itemBucket: any = [];

  constructor(public dialog: MatDialog) {}

  onClick() {
    const dialogRef = this.dialog.open(DialogBucketComponent, {
      width: '500px',
      data: this.itemBucket,
    });
  }
}
