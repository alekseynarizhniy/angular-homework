import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { SubscriptionLike } from 'rxjs';

import { DataService } from 'src/app/services/data.service';
import { DialogSignInComponent } from '../dialog-sign-in/dialog-sign-in.component';

import { User } from '../../interfaces/users';

import { IMG_CLOSE, EXTRA_URL_USERS } from '../../constants/links';
import {
  REGEX_ADDRESS,
  REGEX_EMAIL,
  REGEX_LOGIN,
  REGEX_NAME,
  REGEX_PASSWORD,
} from '../../constants/values';

@Component({
  selector: 'app-dialog-registration',
  templateUrl: './dialog-registration.component.html',
  styleUrls: ['./dialog-registration.component.scss'],
})
export class DialogRegistrationComponent implements OnInit {
  public closeIcon: string = IMG_CLOSE;
  private minSize: number = 4;
  private userNameControl = new FormControl('', [
    Validators.required,
    Validators.minLength(this.minSize),
    Validators.pattern(REGEX_NAME),
  ]);
  private loginControl = new FormControl('', [
    Validators.required,
    Validators.minLength(this.minSize),
    Validators.pattern(REGEX_PASSWORD),
  ]);
  private passwordControl = new FormControl('', [
    Validators.required,
    Validators.minLength(this.minSize),
    Validators.pattern(REGEX_LOGIN),
  ]);
  private emailControl = new FormControl('', [
    Validators.required,
    Validators.pattern(REGEX_EMAIL),
  ]);
  private addressControl = new FormControl('', [
    Validators.required,
    Validators.minLength(this.minSize),
  ]);
  public registrationGroup = new FormGroup({
    name: this.userNameControl,
    login: this.loginControl,
    password: this.passwordControl,
    email: this.emailControl,
    address: this.addressControl,
  });
  private subscription!: SubscriptionLike;
  private logins: string[] = [];
  public loginMessage: string = '';

  constructor(
    public dialogRegistration: MatDialogRef<DialogSignInComponent>,
    public users: DataService
  ) {}

  ngOnInit(): void {
    this.subscription = this.users
      .getData(EXTRA_URL_USERS)
      .subscribe((users) => {
        users.forEach((user: User) => this.logins.push(user.login));
        this.subscription.unsubscribe();
      });
  }

  get name() {
    return this.registrationGroup.get('name');
  }

  get login() {
    return this.registrationGroup.get('login');
  }

  get password() {
    return this.registrationGroup.get('password');
  }

  get email() {
    return this.registrationGroup.get('email');
  }

  get address() {
    return this.registrationGroup.get('address');
  }

  public onSubmit() {
    if (this.registrationGroup.valid) {
      const user: User = this.registrationGroup.value as User;
      const userLogin: string = user['login']!;

      if (!this.logins.includes(userLogin)) {
        this.subscription = this.users
          .addData(EXTRA_URL_USERS, user)
          .subscribe((res) => this.subscription.unsubscribe());

        this.onClose();
      } else {
        this.loginMessage = 'Login exist, try another';
      }
    }
  }

  public onClose() {
    this.dialogRegistration.close();
  }
}
