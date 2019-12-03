import { Component, OnInit } from '@angular/core';

import { UsersService } from './core/api/users.service';
import { User } from './models/user.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'app';

  constructor(private usersService: UsersService) {
  }

  ngOnInit() {
    this.usersService.currentUser
      .subscribe((user: User) => console.log('currentUser from APP', user));
  }
}
