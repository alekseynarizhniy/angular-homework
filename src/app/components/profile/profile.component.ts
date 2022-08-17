import { Component, OnDestroy, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Subscription } from 'rxjs';

import { UserService } from 'src/app/services/user.service';

import { DialogProfileComponent } from '../dialog-profile/dialog-profile.component';

import { User } from 'src/app/interfaces/users';

import { DIALOG_WIDTH } from 'src/app/constants/values';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss'],
})
export class ProfileComponent implements OnInit, OnDestroy {
  public autorization: Boolean = false;
  private currentUser!: User;
  private subscriptions: Subscription[] = [];

  constructor(
    private dialog: MatDialog,
    private userService: UserService
  ) {}

  ngOnInit(): void {
    const autorizationSubscription = this.userService
      .getAutorizationStatus()
      .subscribe((autorizationStatus: boolean) => {
        this.autorization = autorizationStatus;
      });

    this.subscriptions.push(autorizationSubscription);

    const userSubscription = this.userService
      .getUser()
      .subscribe((user: User) => {
        this.currentUser = user;
      });

    this.subscriptions.push(userSubscription);
  }

  ngOnDestroy(): void {
    this.subscriptions.forEach((subscription) => subscription.unsubscribe());
  }

  public onClick(): void {
    this.dialog.open(DialogProfileComponent, {
      width: DIALOG_WIDTH,
      data: this.currentUser,
    });
  }
}
