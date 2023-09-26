import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';


//Components

import { HomePageComponent } from './pages/home-page/home-page.component';
import { BlodunitFormComponent } from './components/blodunit-form/blodunit-form.component';
import { HeaderComponent } from './components/header/header.component';
import { AboutComponent } from './components/about/about.component';
import { ContactComponent } from './components/contact/contact.component';
import { CampaignComponent } from './components/campaign/campaign.component';

const routes: Routes = [
  {
    path: '', component: HomePageComponent,
    children: [
      { path: 'blod-unit', component: BlodunitFormComponent },
      { path: 'about', component: AboutComponent },
      { path: 'contact', component: ContactComponent },
      { path: 'campaign', component: CampaignComponent },
    ],
  },
];

@NgModule({
  declarations: [
    HomePageComponent,
    BlodunitFormComponent,
    HeaderComponent,
    AboutComponent,
    ContactComponent,
    CampaignComponent,
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
  ],
  exports: [
  ]
})
export class HomeModule { }
