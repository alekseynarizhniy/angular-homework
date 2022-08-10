import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { SubscriptionLike } from 'rxjs';

import { DataService } from 'src/app/services/data.service';
import { UserService } from 'src/app/services/user.service';

import { DialogRegistrationComponent } from '../dialog-registration/dialog-registration.component';

import { User } from 'src/app/interfaces/users';

import { IMG_CLOSE, EXTRA_URL_USERS } from '../../constants/links';
import { DIALOG_WIDTH } from '../../constants/values';


@Component({
  selector: 'app-dialog-sign-in',
  templateUrl: './dialog-sign-in.component.html',
  styleUrls: ['./dialog-sign-in.component.scss'],
})
export class DialogSignInComponent {
  public closeIcon: string = IMG_CLOSE;
  private users: User[] = [];
  public errorMessage: string = '';
  private subscription!: SubscriptionLike;

  constructor(
    public dialogRef: MatDialogRef<DialogSignInComponent>,
    public userService: DataService,
    public dialog: MatDialog,
    private userStatus: UserService
  ) {}

  ngOnInit() {
    this.subscription = this.userService.getData(EXTRA_URL_USERS).subscribe((val) => {
      this.users = val;
      this.subscription.unsubscribe();
    });
  }

  onSubmit(form: NgForm): Boolean {
    const value = form.value;

    if (value.login.length && value.password.length) {
      let user = this.users.find(
        (element) =>
          element.login === value.login && element.password === value.password
      );

      if (user) {
        this.userStatus.addUser(user);
        this.onClose();
        return true;
      }
    }

    this.errorMessage = 'wrong login or password';

    return false;
  }

  public onClose() {
    this.dialogRef.close();
  }

  public onRegistrate() {
    this.dialogRef.close();

    this.dialog.open(DialogRegistrationComponent, {
      width: DIALOG_WIDTH,
    });
  }
}
