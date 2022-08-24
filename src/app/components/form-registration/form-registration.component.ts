import { Component, EventEmitter, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

import { User } from '../../interfaces/users';

import {
  REGEX_ADDRESS,
  REGEX_EMAIL,
  REGEX_LOGIN,
  REGEX_NAME,
  REGEX_PASSWORD,
} from '../../constants/values';


@Component({
  selector: 'app-form-registration',
  templateUrl: './form-registration.component.html',
  styleUrls: ['./form-registration.component.scss'],
})
export class FormRegistrationComponent {

  public errorLogin = this.errorClone({name: 'Login', size: '4'});
  public errorPassword =this.errorClone({name: 'Password', size: '6'});
  public errorName = this.errorClone({name: 'Name', size: '4', get pattern () {  return "Only alphabetsallowed."} });
  public errorEmail= this.errorClone({name: 'Email', get pattern () {  return "Incorrect email."}});
  public errorAddress = this.errorClone({name: 'Address', size: '4', get minlength () {  return "Address to short."}});

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
  public loginMessage: string = '';

  @Output() newItemEvent = new EventEmitter<User>();

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

  errorClone(obj: any){
    const myErrors: Record<string, string> = {
      name: '',
      size: '',
      get required () {  return  this['name'] + ' is required.'; } ,
      get minlength () {  return this['name'] + ' must be at least ' + this['size'] + ' characters long.'; },
      get pattern () {  return "Only alphabetsallowed and numbers."},
      set required (val) {} ,
      set minlength (val) {},
      set pattern (val) {}
    };

    return Object.assign(myErrors, obj);
  }


    public onSubmit(): void {

    if (this.registrationGroup.valid) {
      const user: User = this.registrationGroup.value as User;
      this.newItemEvent.emit(user);
    }
  }

}
