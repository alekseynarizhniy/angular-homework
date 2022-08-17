import { Component, OnDestroy, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { SubscriptionLike } from 'rxjs';

import { UserService } from 'src/app/services/user.service';

import { DialogRegistrationComponent } from '../dialog-registration/dialog-registration.component';

import { User } from 'src/app/interfaces/users';

import { IMG_CLOSE } from '../../constants/links';
import { DIALOG_WIDTH } from '../../constants/values';

@Component({
  selector: 'app-dialog-sign-in',
  templateUrl: './dialog-sign-in.component.html',
  styleUrls: ['./dialog-sign-in.component.scss'],
})
export class DialogSignInComponent implements OnInit, OnDestroy {
  public closeIcon: string = IMG_CLOSE;
  private users: User[] = [];
  private subscription!: SubscriptionLike;
  public errorMessage: string = '';

  constructor(
    private dialogRef: MatDialogRef<DialogSignInComponent>,
    private userService: UserService,
    private dialog: MatDialog
  ) {}

  ngOnInit() {
    this.subscription = this.userService
      .getUsersFromServer()
      .subscribe((val: User[]) => {
        this.users = val;
      });
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  onSubmit(form: NgForm): void {
    const value = form.value;

    if (value.login.length && value.password.length) {
      let user = this.users.find(
        (element) =>
          element.login === value.login && element.password === value.password
      );

      if (user) {
        this.userService.addUser(user);
        this.onClose();
      }
    }

    this.errorMessage = 'wrong login or password';
  }

  public onClose(): void {
    this.dialogRef.close();
  }

  public onRegistrate(): void {
    this.dialogRef.close();

    this.dialog.open(DialogRegistrationComponent, {
      width: DIALOG_WIDTH,
    });
  }
}
