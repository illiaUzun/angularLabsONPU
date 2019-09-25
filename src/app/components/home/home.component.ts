import {Component, OnInit} from '@angular/core';
import {Routes, Router} from '@angular/router';

import {StudentListComponent} from '../student/list/student-list.component';
import {StudentDetailsComponent} from '../student/details/student-details.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})

export class HomeComponent implements OnInit {
  active: string;

  constructor(private router: Router) {
    this.router.events.subscribe((val) => {
      this.routeChanged(val);
    });
  }

  ngOnInit() {
  }

  routeChanged(val) {
    this.active = val.url;
  }
}

export const homeChildRoutes: Routes = [
  {
    path: '',
    component: StudentListComponent
  },
  {
    path: 'detail/:id',
    component: StudentDetailsComponent
  }
];
