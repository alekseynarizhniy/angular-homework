import { Injectable } from '@angular/core';
import { Observable, BehaviorSubject, SubscriptionLike } from 'rxjs';
import { EXTRA_URL_USERS } from '../constants/links';

import { User } from '../interfaces/users';
import { DataService } from './data.service';

@Injectable()
export class UserService {
  public isAutorized: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(
    false
  );
  public user: BehaviorSubject<User> = new BehaviorSubject<User>({
    name: '',
    login: '',
    password: '',
    email: '',
    address: '',
  });

  constructor(public data: DataService) {}

  addUser(user: User) {
    this.user.next(user);
    this.isAutorized.next(true);
  }

  getAutorizationStatus(): Observable<boolean> {
    return this.isAutorized.asObservable();
  }

  outUserAutorizationStatus(){
    this.isAutorized.next(false);
  }

  getUser(): Observable<User> {
    return this.user.asObservable();
  }

  updateUser(updatedUser: User) {
    let subscribe: SubscriptionLike = this.data
      .updateData(EXTRA_URL_USERS + '/' + this.user.value.id, updatedUser)
      .subscribe((res) => subscribe.unsubscribe());

    this.user.next(updatedUser);
  }
}
