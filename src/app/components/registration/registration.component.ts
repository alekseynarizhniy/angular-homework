import { Component, OnDestroy, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { SubscriptionLike } from 'rxjs';

import { UserService } from 'src/app/services/user.service';

import { DialogRegistrationComponent } from '../dialog-registration/dialog-registration.component';

import { DIALOG_WIDTH } from '../../constants/values';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss'],
})
export class RegistrationComponent implements OnInit, OnDestroy{
  public autorization: Boolean = false;
  private subcription!: SubscriptionLike;

  constructor(private dialog: MatDialog, private useAuthorization: UserService) {}

  ngOnInit(): void {
    this.subcription = this.useAuthorization.getAutorizationStatus().subscribe((autorizationStatus: Boolean) => {
            this.autorization = autorizationStatus;
        });
  }

  ngOnDestroy(): void {
    this.subcription.unsubscribe();
  }

  public onClick(event: any): void {
    this.dialog.open(DialogRegistrationComponent, {
      width: DIALOG_WIDTH,
    });

    event.target.removeEventListener('click', this.onClick, true);
  }
}
