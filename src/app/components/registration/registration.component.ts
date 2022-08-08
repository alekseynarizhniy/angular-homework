import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { UserService } from 'src/app/services/user.service';
import { DialogRegistrationComponent } from '../dialog-registration/dialog-registration.component';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss'],
})
export class RegistrationComponent {
  constructor(public dialog: MatDialog, public userStatus: UserService) {}

  public onClick(): void {
    const dialogRef = this.dialog.open(DialogRegistrationComponent, {
      width: '500px',
    });
  }
}
