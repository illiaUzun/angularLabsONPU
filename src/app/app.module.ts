import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {RouterModule, Routes} from '@angular/router';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

import {StudentService} from './services/student/student.service';

import {AppComponent} from './components/index/app.component';
import {StudentListComponent} from './components/student/list/student-list.component';
import {StudentDetailsComponent} from './components/student/details/student-details.component';
import {HomeComponent, homeChildRoutes} from './components/home/home.component';
import {HighlightStudentDirective} from './directives/highlight-student.directive';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    children: homeChildRoutes,
  },
  {
    path: '**',
    redirectTo: ''
  }
];

@NgModule({
  declarations: [
    AppComponent,
    StudentListComponent,
    StudentDetailsComponent,
    HomeComponent,
    HighlightStudentDirective
  ],
  imports: [
    BrowserModule,
    RouterModule,
    RouterModule.forRoot(routes),
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule
  ],
  providers: [StudentService],
  bootstrap: [AppComponent]
})

export class AppModule {
}
