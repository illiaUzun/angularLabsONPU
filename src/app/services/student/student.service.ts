import {Injectable} from '@angular/core';

@Injectable()
export class StudentService {

  constructor() {
  }

  getAllStudents() {
    let studentList: any;
    // tslint:disable-next-line:triple-equals
    if (localStorage.getItem('students') && localStorage.getItem('students') != '') {
      studentList = {
        code: 200,
        message: 'Students List Fetched Successfully',
        data: JSON.parse(localStorage.getItem('students'))
      };
    } else {
      studentList = {
        code: 200,
        message: 'Students List Fetched Successfully',
        data: JSON.parse(localStorage.getItem('students'))
      };
    }
    return studentList;
  }

  getStudentDetails(index: number) {
    let studentList = JSON.parse(localStorage.getItem('students'));

    let returnData = {
      code: 200,
      message: 'Student Details Fetched',
      studentData: studentList[index]
    };

    return returnData;
  }
}
