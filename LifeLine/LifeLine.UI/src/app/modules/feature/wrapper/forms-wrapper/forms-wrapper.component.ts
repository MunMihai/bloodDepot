import { Component } from '@angular/core';
import { ActivatedRoute, Route } from '@angular/router';
import { DonateBlood } from '../../models/Entities/donate-blood';
import { DonateBloodService } from '../../services/donate-blood.service';
import { RequestBlood } from '../../models/Entities/request-blood';
import { RequestBloodService } from '../../services/request-blood.service';

@Component({
  selector: 'app-forms-wrapper',
  templateUrl: './forms-wrapper.component.html',
  styleUrls: ['./forms-wrapper.component.css']
})
export class FormsWrapperComponent {
  currentRoute = this.route.snapshot.firstChild?.routeConfig?.path;

  constructor(private route: ActivatedRoute,
    private donateBloodService: DonateBloodService,
    private requestBloodService: RequestBloodService){}

  handleDonateBloodSubmit(data: DonateBlood){
    this.donateBloodService.sendDonationRequest(data).subscribe(
      (response)=>{
        console.log('Response: ', response)
      },
      (error)=>{
        console.error("Error from parent: ", error)
      }
    )
  }

  handleRequestBloodSubmit(data: RequestBlood){
    this.requestBloodService.sendBloodRequest(data).subscribe(
      (response)=>{
        console.log('Response: ', response)
      },
      (error)=>{
        console.error("Error from parent: ", error)
      }
    )
  }
}
