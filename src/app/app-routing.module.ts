import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ProfileComponent } from './homepage/profile/profile.component';
import { OrdersComponent } from './dashboard/orders/orders.component';
import { LoginComponent } from './login/login.component';

const routes: Routes = [
  { path: '', component: OrdersComponent },
  { path: 'login', component: LoginComponent },
  { path: 'profile', component: ProfileComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
