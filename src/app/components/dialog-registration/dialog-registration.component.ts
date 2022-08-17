import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { SubscriptionLike } from 'rxjs';

import { UserService } from 'src/app/services/user.service';

import { DialogSignInComponent } from '../dialog-sign-in/dialog-sign-in.component';

import { User } from '../../interfaces/users';

import { IMG_CLOSE } from '../../constants/links';
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
export class DialogRegistrationComponent implements OnInit, OnDestroy {
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
    private dialogRegistration: MatDialogRef<DialogSignInComponent>,
    private userService: UserService
  ) {}

  ngOnInit(): void {
    this.subscription = this.userService
      .getUsersFromServer()
      .subscribe((users: User[]) => {
        users.forEach((user: User) => this.logins.push(user.login));
      });
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
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

  public onSubmit(): void {
    if (this.registrationGroup.valid) {
      const user: User = this.registrationGroup.value as User;
      const userLogin: string = user.login;

      if (!this.logins.includes(userLogin)) {
        this.userService.addNewUser(user);
        this.onClose();
      } else {
        this.loginMessage = 'Login exist, try another';
      }
    }
  }

  public onClose(): void {
    this.dialogRegistration.close();
  }
}
