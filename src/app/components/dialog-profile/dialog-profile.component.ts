import { Component, Inject } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

import { UserService } from 'src/app/services/user.service';

import { User } from 'src/app/interfaces/users';

import { IMG_CLOSE } from 'src/app/constants/links';
import {
  REGEX_ADDRESS,
  REGEX_EMAIL,
  REGEX_NAME,
  REGEX_PASSWORD,
} from '../../constants/values';

@Component({
  selector: 'app-dialog-profile',
  templateUrl: './dialog-profile.component.html',
  styleUrls: ['./dialog-profile.component.scss'],
})
export class DialogProfileComponent {
  public closeIcon: string = IMG_CLOSE;
  private minSize: number = 4;
  private userNameControl = new FormControl(this.data.name, [
    Validators.required,
    Validators.minLength(this.minSize),
    Validators.pattern(REGEX_NAME),
  ]);
  private loginControl = new FormControl({
    value: this.data.login,
    disabled: true,
  });
  private passwordControl = new FormControl(this.data.password, [
    Validators.required,
    Validators.minLength(this.minSize),
    Validators.pattern(REGEX_PASSWORD),
  ]);
  private emailControl = new FormControl(this.data.email, [
    Validators.required,
    Validators.pattern(REGEX_EMAIL),
  ]);
  private addressControl = new FormControl(this.data.address, [
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
  loginMessage: string = '';

  constructor(
    private dialogRegistration: MatDialogRef<DialogProfileComponent>,
    private userService: UserService,
    @Inject(MAT_DIALOG_DATA) public data: User
  ) {}

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

      this.userService.updateUser({ ...this.data, ...user });
      this.onClose();
    } else {
      console.log('Wrong');
    }
  }

  public onClose(): void {
    this.dialogRegistration.close();
  }
}
