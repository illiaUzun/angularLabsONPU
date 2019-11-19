import { Validators, FormBuilder, FormGroup } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

import { ModalComponent } from '../modal/modal.component';
import { WeatherService } from 'src/services/weather.service';
import { UserService } from '../../services/user.service';
import { User } from 'src/models/user.model';

export class MyErrorStateMatcher {
  isErrorState(formGroup: FormGroup, lables: Array<string>): boolean {
    for (const lable of lables) {
      if (formGroup.controls[lable].invalid) {
        return true;
      }
    }
    return false;
  }
}

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  user: User;
  btnLable = 'Sign in';
  lables = ['username', 'email', 'password', 'city', 'gender'];

  loginForm: FormGroup;
  matcher = new MyErrorStateMatcher();

  constructor(
    private router: Router,
    private userService: UserService,
    private formBuider: FormBuilder,
    private modalService: NgbModal
  ) {}

  ngOnInit() {
    this.loginForm = this.formBuider.group({
      username: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
      city: ['', Validators.required],
      gender: ['', Validators.required]
    });

    this.userService
      .loadUser()
      .subscribe(
        user =>
          (this.user = new User(
            user.username,
            user.email,
            user.password,
            user.city,
            user.gender
          ))
      );
  }

  isLoginSuccess(): boolean {
    if (this.matcher.isErrorState(this.loginForm, this.lables)) {
      this.modalService.open(ModalComponent);
      return false;
    }

    this.userService.setUser(
      new User(
        this.loginForm.controls.username.value,
        this.loginForm.controls.email.value,
        this.loginForm.controls.password.value,
        this.loginForm.controls.city.value,
        this.loginForm.controls.gender.value
      )
    );

    return true;
  }

  redirectToProfile() {
    if (this.isLoginSuccess()) {
      this.router.navigate(['/profile']);
    }
  }
}
