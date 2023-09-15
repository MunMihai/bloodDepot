import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

//Components
import { DashSidebarComponent } from './components/dash-sidebar/dash-sidebar.component';
import { DashboardPageComponent } from './pages/dashboard-page/dashboard-page.component';
import { DashNavbarComponent } from './components/dash-navbar/dash-navbar.component';
import { BlodunitListComponent } from './components/blodunit-list/blodunit-list.component';

const routes: Routes = [
  {
    path: '', component: DashboardPageComponent,
    children: [
      { path: 'blod-unit-list', component: BlodunitListComponent },
    ],
  },
];

@NgModule({
  declarations: [
    DashSidebarComponent,
    DashboardPageComponent,
    DashNavbarComponent,
    BlodunitListComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
  ]
})
export class DashboardModule { }
