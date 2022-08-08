import { Injectable } from '@angular/core';

import { User } from "../interfaces/users";

@Injectable()
export class UserService {
  private user: User = {
    name: '',
    login: '',
    password: '',
    email: '',
    address: ''
  };

  private status:Boolean = false;

  addUser(user:User){
    this.user = user;
    this.status = true;
  }

  getStatus(){
    return this.status;
  }

}
