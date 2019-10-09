import {Component, OnInit} from '@angular/core';
import {Router, ActivatedRoute} from '@angular/router';

import {StudentService} from '../../../services/student/student.service';

@Component({
  selector: 'app-root',
  templateUrl: './student-details.component.html',
  styleUrls: ['./student-details.component.css'],
})

export class StudentDetailsComponent implements OnInit {
  index: any;
  studentDetail: any;

  constructor(private router: Router, private route: ActivatedRoute, private studentService: StudentService) {
    this.route.params.subscribe(params => {
      this.index = params['id'];
      if (this.index) {
        this.getStudentDetails(this.index);
      }
    });
  }

  ngOnInit() {
  }

  getStudentDetails(index: number) {
    const getStudentDetail = this.studentService.getStudentDetails(index);
    if (getStudentDetail) {
      this.studentDetail = getStudentDetail.studentData;
    }
  }
}
