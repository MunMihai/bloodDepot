import { Component, OnInit, Output } from '@angular/core';
import { Donation } from '../../models/donations';
import { Status } from 'src/app/shared/Enums/status';
import { BloodType } from 'src/app/shared/Enums/blood-type';
import { RhFactor } from 'src/app/shared/Enums/rh-factor';
import { DonationService } from '../../services/donation.service';

@Component({
  selector: 'app-donates-page',
  templateUrl: './donates-page.component.html',
  styleUrls: ['./donates-page.component.css']
})
export class DonatesPageComponent implements OnInit  {
  data!: Donation[];
  constructor(private donationService: DonationService) {  }

  ngOnInit(): void {
    this.retriveDonations();
  }

  retriveDonations(): void{
    this.donationService.getAllDonations().subscribe(
      (donations: Donation[])=>{
        this.data = donations;
      },
      error=>{
        console.log('Error fetching donations:', error);
      }
    )
  }

  handleDelete(donation: Donation) {
    this.donationService.deleteDonation(donation.id).subscribe(
      () => {
        console.log("Donation deleted successfully");
      },
        error => {
          console.log('Error while deleting donation:', error)
        }
    )
  }

  handleApprove(donation: Donation) {
    this.donationService.updateDonation(donation.id, donation).subscribe(
      () => {
        console.log("Donation updated successfully");
      },
        error => {
          console.log('Error while updating donation:', error)
        }
    )
  }
}
