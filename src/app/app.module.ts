import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
/* components */
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { LoginComponent } from './login/login.component';
import { ButtonComponent } from './button/button.component';
import { ProfileComponent } from './profile/profile.component';
import { ModalComponent } from './modal/modal.component';
/*directives */
import { GenderDirective } from './gender.directive';
/*services*/
import { UserService } from '../services/user.service';
import { WeatherService } from 'src/services/weather.service';
/*material-components*/
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatTableModule } from '@angular/material/table';

import { NgxDatatableModule } from '@swimlane/ngx-datatable';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
/* alyle-components */
import { LyThemeModule, LY_THEME, LyCommonModule } from '@alyle/ui';
import { LyTypographyModule } from '@alyle/ui/typography';
import { MinimaDark } from '@alyle/ui/themes/minima';
import { LyFieldModule } from '@alyle/ui/field';
import { LyButtonModule } from '@alyle/ui/button';
import { LyRadioModule } from '@alyle/ui/radio';
import { LyCardModule } from '@alyle/ui/card';
import { LySelectModule } from '@alyle/ui/select';
import { LyTabsModule } from '@alyle/ui/tabs';
import { LyIconModule } from '@alyle/ui/icon';
import { LyBadgeModule } from '@alyle/ui/badge';

@NgModule({
  declarations: [
    AppComponent,
    ProfileComponent,
    LoginComponent,
    ButtonComponent,
    GenderDirective,
    ModalComponent
  ],
  imports: [
    NgbModule,
    NgxDatatableModule,
    BrowserModule,
    CommonModule,
    AppRoutingModule,
    FormsModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    MatProgressSpinnerModule,
    LyFieldModule,
    LyBadgeModule,
    LyButtonModule,
    LyRadioModule,
    LySelectModule,
    LyCommonModule,
    LyCardModule,
    LyTypographyModule,
    LyTabsModule,
    LyIconModule,
    MatPaginatorModule,
    MatTableModule,
    LyThemeModule.setTheme('minima-dark')
  ],
  providers: [
    { provide: LY_THEME, useClass: MinimaDark, multi: true },
    UserService,
    WeatherService
  ],
  entryComponents: [ModalComponent],
  bootstrap: [AppComponent]
})
export class AppModule {}
