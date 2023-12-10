import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './modules/static/home/home.component';
import { AboutUsComponent } from './modules/static/about-us/about-us.component';
import { CampaignComponent } from './modules/static/campaign/campaign.component';
import { ContactComponent } from './modules/static/contact/contact.component';

const routes: Routes = [
  { path: 'Home', component: HomeComponent },
  { path: 'AboutUs', component: AboutUsComponent },
  { path: 'Campaign', component: CampaignComponent },
  { path: 'Contact', component: ContactComponent },
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'Authentificate'
  },
  {
    path: 'Authentificate',
    loadChildren: () => import('./modules/authentification/authentification.module').then(m => m.AuthentificationModule)
  },
  {
    path: 'Info',
    loadChildren: () => import('./modules/user-info/user-info.module').then(m => m.UserInfoModule)
  },
  {
    path: 'Feature',
    loadChildren: () => import('./modules/feature/feature.module').then(m => m.FeatureModule)
  },
  {
    path: 'Admin',
    loadChildren: () => import('./modules/admin-dashboard/admin-dashboard.module').then(m => m.AdminDashboardModule)
  },
  {
    path: 'Info',
    loadChildren: () => import('./modules/user-info/user-info.module').then(m => m.UserInfoModule)
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
