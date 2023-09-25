import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BloodDonateComponent } from './component/blood-donate/blood-donate.component';
import { BloodRequestComponent } from './component/blood-request/blood-request.component';
import { FormsWrapperPageComponent } from './pages/forms-wrapper-page/forms-wrapper-page.component';
import { Routes, RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


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
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    FormsModule,
    ReactiveFormsModule
  ]
})
export class FormModule { }
