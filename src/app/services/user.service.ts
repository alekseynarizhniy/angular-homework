import { Injectable } from '@angular/core';
import { Observable, BehaviorSubject } from 'rxjs';

import { User } from '../interfaces/users';

@Injectable()
export class UserService {
  private user!: User;

  public isAutorized: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(
    false
  );

  addUser(user: User) {
    this.user = user;
    this.isAutorized.next(true);
  }

  getAutorizationStatus(): Observable<boolean> {
    return this.isAutorized.asObservable();
  }
}
