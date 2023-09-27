import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DonateBloodModel } from 'src/app/models/donateBlood.model';
import { RequestBloodModel } from 'src/app/models/requestBlood.model';
import { DonateBloodService } from 'src/app/services/donate-blood.service';
import { RequestBloodService } from 'src/app/services/request-blood.service';

@Component({
  selector: 'app-forms-wrapper-page',
  templateUrl: './forms-wrapper-page.component.html',
  styleUrls: ['./forms-wrapper-page.component.css']
})
export class FormsWrapperPageComponent {
  
  currentRoute = this.route.snapshot.firstChild?.routeConfig?.path;

  constructor(
    private route: ActivatedRoute,
    private donateBloodService: DonateBloodService,
    private requestBloodService: RequestBloodService){}

  handleDonateBloodSubmit(data: DonateBloodModel){
    this.donateBloodService.sendDonationRequest(data).subscribe(
      (response)=>{
        console.log('Response: ', response)
      },
      (error)=>{
        console.error("Error from parent: ", error)
      }
    )
  }

  handleRequestBloodSubmit(data: RequestBloodModel){
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
