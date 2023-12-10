import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CanvasJSAngularChartsModule } from '@canvasjs/angular-charts';

import { DonatesPageComponent } from './components/donates-page/donates-page.component';
import { RequestsPageComponent } from './components/requests-page/requests-page.component';
import { Route, RouterModule, Routes } from '@angular/router';
import { AdminDashboardComponent } from './admin-dashboard.component';
import { DonationsTableComponent } from './components/donations-table/donations-table.component';
import { BloodChartComponent } from './components/blood-chart/blood-chart.component';

const routes: Routes = [
  {
    path: "", component: AdminDashboardComponent,
    children: [
      { path: 'donates-page', component: DonatesPageComponent },
      { path: 'requests-page', component: RequestsPageComponent }
    ]
  }
]

@NgModule({
  declarations: [
    DonatesPageComponent,
    RequestsPageComponent,
    DonationsTableComponent,
    BloodChartComponent,
    AdminDashboardComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    CanvasJSAngularChartsModule
  ]
})
export class AdminDashboardModule { }
