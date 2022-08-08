import { Component, Input } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { UserService } from 'src/app/services/user.service';

import { DialogBucketComponent } from '../dialog-bucket/dialog-bucket.component';
import { DialogSignInComponent } from '../dialog-sign-in/dialog-sign-in.component';

@Component({
  selector: 'app-bucket',
  templateUrl: './bucket.component.html',
  styleUrls: ['./bucket.component.scss'],
})
export class BucketComponent {
  public bucket: string = '../../../assets/images/bucket.png';

  @Input() itemBucket: any = [];

  constructor(public dialog: MatDialog, private userStatus: UserService) {}

  public onClick(): void {
    if (this.userStatus.getStatus()) {
      const dialogRef = this.dialog.open(DialogBucketComponent, {
        width: '500px',
        data: this.itemBucket,
      });
    } else {
      const dialogRef = this.dialog.open(DialogSignInComponent, {
        width: '500px',
      });
    }
  }
}
