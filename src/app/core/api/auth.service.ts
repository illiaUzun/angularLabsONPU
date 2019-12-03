import { Injectable } from '@angular/core';
import { tap } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment';

@Injectable()
export class AuthService {
  private readonly tokenEndpoint = `${environment.apiUrl}/Token`;
  private readonly tokenStorageKey = 'accessToken';

  constructor(private httpClient: HttpClient, private router: Router) {}

  login(username: string, password: string): Observable<any> {
    return this.httpClient
      .get(`${this.tokenEndpoint}?username=${username}&password=${password}`)
      .pipe(tap((response: any) => this.saveToken(response.token)));
  }

  logout() {
    localStorage.removeItem(this.tokenStorageKey);
    this.router.navigate(['/login']);
  }

  private saveToken(accessToken: string) {
    localStorage.setItem(this.tokenStorageKey, accessToken);
  }
}
