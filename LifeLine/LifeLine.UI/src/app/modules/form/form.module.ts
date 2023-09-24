import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeModule } from '../home/home.module';
import { BloodDonateComponent } from './components/blood-donate/blood-donate.component';
import { BloodRequestComponent } from './components/blood-request/blood-request.component';
import { CalendarComponent } from './components/calendar/calendar.component';
import { FormsWrapperPageComponent } from './pages/forms-wrapper-page/forms-wrapper-page.component';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: '', component: FormsWrapperPageComponent,
    children: [
      { path: 'donate-form', component: BloodDonateComponent },
      { path: 'request-form', component: BloodRequestComponent },
    ]
  }
]

@NgModule({
  declarations: [
    BloodDonateComponent,
    BloodRequestComponent,
    FormsWrapperPageComponent,
    CalendarComponent,
  ],
  imports: [
    CommonModule,
    HomeModule,
    RouterModule.forChild(routes)
  ]
})
export class FormModule { }
