import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { JwtModule } from '@auth0/angular-jwt';

import { OrdersService } from './api/orders.service';
import { UsersService } from './api/users.service';
import { AuthService } from './api/auth.service';
import { environment } from 'src/environments/environment';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { TokenInterceptor } from './api/token.interceptor';

function tokenGetter() {
  return localStorage.getItem('accessToken');
}
@NgModule({
  declarations: [],
  imports: [
    HttpClientModule,
    JwtModule.forRoot({
      config: {
        tokenGetter,
        blacklistedRoutes: ['/Token'],
        whitelistedDomains: ['pnit-lessons.azurewebsites.net']
      }
    })
  ],
  providers: [
    OrdersService,
    UsersService,
    AuthService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: TokenInterceptor,
      multi: true
    }
  ]
})
export class CoreModule {}
