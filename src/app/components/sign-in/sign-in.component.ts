import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { UserService } from 'src/app/services/user.service';
import { DialogSignInComponent } from '../dialog-sign-in/dialog-sign-in.component';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.scss'],
})
export class SignInComponent {
  constructor(public dialog: MatDialog, public userStatus: UserService) {}

  public onClick(): void {
    const dialogRef = this.dialog.open(DialogSignInComponent, {
      width: '500px',
    });
  }
}
