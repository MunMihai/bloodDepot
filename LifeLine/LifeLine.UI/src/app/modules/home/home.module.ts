import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';


//Components

import { HomePageComponent } from './pages/home-page/home-page.component';
import { BlodunitFormComponent } from './components/blodunit-form/blodunit-form.component';
import { HeaderComponent } from './components/header/header.component';

const routes: Routes = [
  {
    path: '', component: HomePageComponent,
    children: [
      { path: 'blod-unit', component: BlodunitFormComponent },
    ],
  },
];

@NgModule({
  declarations: [
    HomePageComponent,
    BlodunitFormComponent,
    HeaderComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
  ]
})
export class HomeModule { }
