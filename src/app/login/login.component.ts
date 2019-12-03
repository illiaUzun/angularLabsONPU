import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { AuthService } from '../core/api/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  isSubmited = false;
  error: string;

  constructor(private formBuilder: FormBuilder,
              private authService: AuthService,
              private router: Router) {
  }

  ngOnInit() {
    this.buildForm();
  }

  onSubmit() {
    this.isSubmited = true;
    this.error = null;

    if (this.loginForm.invalid) {
      return;
    }

    const formValue = this.loginForm.value;
    this.authService.login(formValue.userName, formValue.password)
      .subscribe(
        () => this.onSuccess(),
        () => this.onFailed());
  }

  private onSuccess() {
    this.router.navigate(['/']);
  }

  private onFailed() {
    this.error = 'Invalid username or password';
  }

  private buildForm() {
    this.loginForm = this.formBuilder.group({
      userName: [ null, Validators.required ],
      password: [ null, Validators.required ],
    });
  }
}
