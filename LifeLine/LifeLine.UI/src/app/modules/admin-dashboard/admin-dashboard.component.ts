import { Component } from '@angular/core';
import { Donation } from './models/donations';

@Component({
  selector: 'app-admin-dashboard',
  templateUrl: './admin-dashboard.component.html',
  styleUrls: ['./admin-dashboard.component.css']
})
export class AdminDashboardComponent {
data!: Donation[];
constructor(){
  
}
}
