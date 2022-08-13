import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';

import { DialogProfileComponent } from '../dialog-profile/dialog-profile.component';

import { UserService } from 'src/app/services/user.service';

import { DIALOG_WIDTH } from 'src/app/constants/values';
import { User } from 'src/app/interfaces/users';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {
  autorization: Boolean = false;
  currentUser!:User;

  constructor(public dialog: MatDialog, public useAuthorization: UserService) {}

  ngOnInit(): void {
    this.useAuthorization.getAutorizationStatus().subscribe((autorizationStatus: boolean) => {
            this.autorization = autorizationStatus;
        });

    this.useAuthorization.getUser().subscribe((user: User) => {
      this.currentUser = user;
    });

  }

  public onClick(): void {
    this.dialog.open(DialogProfileComponent, {
      width: DIALOG_WIDTH,
      data: this.currentUser
    });
  }

}
