import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';

import { UserService } from 'src/app/services/user.service';
import { DialogSignInComponent } from '../dialog-sign-in/dialog-sign-in.component';

import { DIALOG_WIDTH } from "../../constants/values";

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.scss'],
})
export class SignInComponent implements OnInit{
  autorization: Boolean = false;

  constructor(public dialog: MatDialog, public useAuthorization: UserService) {
  }

  ngOnInit(): void {
    this.useAuthorization.getAutorizationStatus().subscribe((autorizationStatus: Boolean) => {
            this.autorization = autorizationStatus;
        });
  }

  public onClick(): void {
    this.dialog.open(DialogSignInComponent, {
      width: 'DIALOG_WIDTH',
    });
  }
}
