import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsWrapperComponent } from './wrapper/forms-wrapper/forms-wrapper.component';
import { DonateFormComponent } from './components/donate-form/donate-form.component';
import { ReactiveFormsModule, FormsModule  } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';
import { RequestFormComponent } from './components/request-form/request-form.component';

const routes: Routes = [
  {
    path: '', component: FormsWrapperComponent,
    children: [
      { path: 'donate-form', component: DonateFormComponent},
      { path: 'request-form', component: RequestFormComponent },
    ]
  }
]

@NgModule({
  declarations: [
    FormsWrapperComponent,
    DonateFormComponent,
    RequestFormComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forChild(routes)
  ]
})
export class FeatureModule { }
