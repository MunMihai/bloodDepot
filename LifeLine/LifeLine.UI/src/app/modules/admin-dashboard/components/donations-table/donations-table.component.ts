import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Donation } from '../../models/donations';
import { BloodType } from 'src/app/shared/Enums/blood-type';
import { RhFactor } from 'src/app/shared/Enums/rh-factor';
import { Status } from 'src/app/shared/Enums/status';

@Component({
  selector: 'app-donations-table',
  templateUrl: './donations-table.component.html',
  styleUrls: ['./donations-table.component.css']
})
export class DonationsTableComponent {
  @Output() deleteDonation: EventEmitter<Donation> = new EventEmitter<Donation>
  @Output() approveDonation: EventEmitter<Donation> = new EventEmitter<Donation>
  @Input() displayStatus!: Status;
  @Input() isApproved!: boolean;
  @Input() data!: Donation[];

  constructor() {  }

  approve(donation: Donation) {
    const index = this.data.indexOf(donation);
    if (donation.status === Status.OnReview) {
      this.data[index].status = Status.Approved;
      this.approveDonation.emit(this.data[index])
    }
  }

  delete(donation: Donation) {
    const index = this.data.indexOf(donation);
    if (donation.status === Status.OnReview || donation.status === Status.Approved) {
      this.data[index].status = Status.Denied;
      this.deleteDonation.emit(this.data[index])
    }
  }
}
