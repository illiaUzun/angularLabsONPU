import { Injectable } from '@angular/core';
import { delay } from 'rxjs/operators';
import { of, Observable } from 'rxjs';

import { User } from 'src/models/user.model';

export interface IUser {
  username: string;
  email: string;
  password: string;
  city: string;
  gender: string;
}

@Injectable()
export class UserService {
  user: User;
  constructor() {
    this.user = new User();
  }
  loadUser(): Observable<User> {
    return of<IUser>(this.user).pipe(delay(2000));
  }
  setUser(user: User) {
    this.user = user;
  }
  getUser(): User {
    return this.user;
  }
}
