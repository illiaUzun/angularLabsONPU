import { IUser } from '../services/user.service';

export class User implements IUser {
  username: string;
  email: string;
  password: string;
  city: string;
  gender: string;

  constructor(
    username = 'Illia',
    email = 'illia.uzun@qlearsite.com',
    password = 'illia12345',
    city = 'Odessa',
    gender = 'male'
  ) {
    this.username = username;
    this.email = email;
    this.password = password;
    this.city = city;
    this.gender = gender;
  }
}
