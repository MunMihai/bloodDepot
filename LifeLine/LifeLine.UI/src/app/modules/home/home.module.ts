import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

//Components
import { NavbarComponent } from './components/navbar/navbar.component';
import { FooterComponent } from './components/footer/footer.component';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { BlodunitFormComponent } from './components/blodunit-form/blodunit-form.component';
import { AboutComponent } from './components/about/about.component';

const routes: Routes = [
  {
    path: '', component: HomePageComponent,
    children: [
      { path: 'blod-unit', component: BlodunitFormComponent },
      { path: 'about', component: AboutComponent }
    ],
  },
];

@NgModule({
  declarations: [
    NavbarComponent,
    FooterComponent,
    HomePageComponent,
    BlodunitFormComponent,
    AboutComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
  ]
})
export class HomeModule { }
