import {Component} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  studentsList = [
    {
      id: 1,
      first_name: 'Illia',
      last_name: 'Uzun',
      email: 'Uzun@gmail.com',
      phone: +2433423423,
      department: 'Science'
    },
    {
      id: 2,
      first_name: 'Vasya',
      last_name: 'Vasiliiv',
      email: 'Vasiliiv@gmail.com',
      phone: +14234234,
      department: 'Science'
    },
    {
      id: 3,
      first_name: 'Petr',
      last_name: 'Petrov',
      email: 'Petrov@gmail.com',
      phone: +2452435245,
      department: 'Science'
    },
    {
      id: 4,
      first_name: 'Ivan',
      last_name: 'Ivanov',
      email: 'Ivanov@gmail.com',
      phone: +2435325345,
      department: 'Science'
    },
    {
      id: 5,
      first_name: 'Pavel',
      last_name: 'Pavlov',
      email: 'Pavlov@gmail.com',
      phone: +380679172040,
      department: 'Science'
    },
  ];

  constructor() {
    localStorage.setItem('students', JSON.stringify(this.studentsList));
  }
}
