import {Component, OnInit} from '@angular/core';

import {StudentService} from '../../../services/student/student.service';

@Component({
  selector: 'app-root',
  templateUrl: './student-list.component.html',
  styleUrls: ['./student-list.component.css'],
})

export class StudentListComponent implements OnInit {
  studentListData: any;
  filterData: any;

  constructor(private studentService: StudentService) {
  }

  ngOnInit() {
    this.getStudentList();
  }

  getStudentList() {
    const studentList = this.studentService.getAllStudents();
    this.success(studentList);
  }

  success(data) {
    this.studentListData = data.data;
    for (let i = 0; i < this.studentListData.length; i++) {
      this.studentListData[i].name = this.studentListData[i].first_name + ' ' + this.studentListData[i].last_name;
    }
  }
}

