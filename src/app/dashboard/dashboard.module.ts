import { NgModule } from '@angular/core';

import { OrdersComponent } from './orders/orders.component';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [
    OrdersComponent
  ],
  imports: [ SharedModule ],
  providers: []
})
export class DashboardModule { }
