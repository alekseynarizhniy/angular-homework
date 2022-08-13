import { Component, Input } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { UserService } from 'src/app/services/user.service';

import { DialogBucketComponent } from '../dialog-bucket/dialog-bucket.component';
import { DialogSignInComponent } from '../dialog-sign-in/dialog-sign-in.component';

import { IMG_BUCKET } from '../../constants/links';
import { DIALOG_WIDTH } from '../../constants/values';
import { ProductWrapper } from 'src/app/classes/product';

@Component({
  selector: 'app-bucket',
  templateUrl: './bucket.component.html',
  styleUrls: ['./bucket.component.scss'],
})
export class BucketComponent {
  public bucket = IMG_BUCKET;
  autorization: Boolean = false;

  @Input() itemBucket: ProductWrapper[] = [];

  constructor(public dialog: MatDialog, public useAuthorization: UserService) {}

  ngOnInit(): void {
    this.useAuthorization.getAutorizationStatus().subscribe((autorizationStaus: Boolean) => {
            this.autorization = autorizationStaus;
        });
  }

  public onClick(): void {
    if (this.autorization) {
      this.dialog.open(DialogBucketComponent, {
        width: DIALOG_WIDTH,
        data: this.itemBucket,
      });
    } else {
      this.dialog.open(DialogSignInComponent, {
        width: DIALOG_WIDTH,
      });
    }
  }
}
