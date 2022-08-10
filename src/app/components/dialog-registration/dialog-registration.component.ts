import { Component, OnDestroy, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { SubscriptionLike } from 'rxjs';

import { DataService } from 'src/app/services/data.service';
import { DialogSignInComponent } from '../dialog-sign-in/dialog-sign-in.component';

import { User } from '../../interfaces/users';

import { IMG_CLOSE, EXTRA_URL_USERS } from '../../constants/links';


@Component({
  selector: 'app-dialog-registration',
  templateUrl: './dialog-registration.component.html',
  styleUrls: ['./dialog-registration.component.scss'],
})
export class DialogRegistrationComponent {
  public closeIcon: string = IMG_CLOSE;
  private subscription!: SubscriptionLike;

  constructor(
    public dialogRegistration: MatDialogRef<DialogSignInComponent>,
    public users: DataService
  ) {}

  public onSubmit(form: NgForm) {
    const value: User = form.value;

    this.subscription = this.users
      .updateData(EXTRA_URL_USERS, value)
      .subscribe((res) => this.subscription.unsubscribe());

    this.onClose();
  }

  public onClose() {
    this.dialogRegistration.close();
  }
}
