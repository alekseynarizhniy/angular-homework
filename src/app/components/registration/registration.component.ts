import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';

import { UserService } from 'src/app/services/user.service';

import { DialogRegistrationComponent } from '../dialog-registration/dialog-registration.component';

import { DIALOG_WIDTH } from '../../constants/values';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss'],
})
export class RegistrationComponent {
  autorization: Boolean = false;

  constructor(public dialog: MatDialog, public useAuthorization: UserService) {}

  ngOnInit(): void {
    this.useAuthorization.getAutorizationStatus().subscribe((val: any) => {
            this.autorization = val;
        });
  }

  public onClick(): void {
    this.dialog.open(DialogRegistrationComponent, {
      width: DIALOG_WIDTH,
    });
  }
}
