import { Component, OnInit, TemplateRef, Input } from '@angular/core';
import { Router } from '@angular/router';

import { AuthService } from '../core/api/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  @Input() navBarTmpl: TemplateRef<any>;

  constructor(private authService: AuthService) {}

  ngOnInit() {}

  logout() {
    this.authService.logout();
  }
}
