import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Donation } from '../models/donations';
import { BloodType } from 'src/app/shared/Enums/blood-type';
import { RhFactor } from 'src/app/shared/Enums/rh-factor';
import { Status } from 'src/app/shared/Enums/status';
import { StorageStatistic } from '../models/storage-statistic';

@Injectable({
  providedIn: 'root'
})
export class DonationService {
  private apiUrl = environment.apiUrl;
  private httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };
  constructor(private http: HttpClient) { }

  getAllDonations(): Observable<Donation[]> {
    // return this.http.get<Donation[]>(`${this.apiUrl}/donations`);
    const data = this.getMockDonations();
    this.completDonationCheck();            //

    return of(data);
  }
  completDonationCheck(): void{         //Ar fi bine deimplimentat in Back
    const currentDate = new Date();
    const data = this.getMockDonations()
    data.forEach((donation)=>{
      const donationDate = new Date(donation.dateTime);
      if(donationDate < currentDate && donation.status == Status.Approved){   
        donation.status = Status.Completed;
        this.updateDonation(donation.id, donation).subscribe(
          (updatedDonation: Donation) => {
            console.log(`Donation status updated: ${updatedDonation.id}`);
          },
          error => {
            console.log('Error updating donation status:', error);
          }
        );
      }
    })
  }

  getDonationById(id: number): Observable<Donation> {
    return this.http.get<Donation>(`${this.apiUrl}/donations/${id}`);
  }

  updateDonation(id: number, updatedDonation: Donation): Observable<Donation> {
    return this.http.put<Donation>(`${this.apiUrl}/donations/${id}`, updatedDonation, this.httpOptions);
  }

  deleteDonation(id: number): Observable<{}> {
    return this.http.delete(`${this.apiUrl}/donations/${id}`);
  }
  getStatistics() {
    // return this.http.get<StorageStatistic>(`${this.apiUrl}/statistic`);
    const statistic = this.getMockStatistic();
    return of(statistic);
  }
  generateStatistics(): Observable<StorageStatistic> {
    const donations: Donation[] = this.getMockDonations();
    const statistics: StorageStatistic = this.getMockStatistic(); // Initialize the statistics

    donations.forEach((donation) => {
      if (donation.status === Status.Completed) {
        switch (donation.bloodType) {
          case BloodType[0]:
            donation.rhFactor === RhFactor[0] ? statistics.positiveA++ : statistics.negativeA++;
            break;
          case BloodType[1]:
            donation.rhFactor === RhFactor[0] ? statistics.positiveB++ : statistics.negativeB++;
            break;
          case BloodType[2]:
            donation.rhFactor === RhFactor[0] ? statistics.positiveAB++ : statistics.negativeAB++;
            break;
          case BloodType[3]:
            donation.rhFactor === RhFactor[0] ? statistics.positiveO++ : statistics.negativeO++;
            break;
          default:
            break;
        }
      }
    });

    return of(statistics);
  }

  private getMockStatistic(){
    return {
      positiveA: 9.1,
      negativeA: 9.1,
      positiveB: 3.7,
      negativeB: 3.7,
      positiveAB: 36.4,
      negativeAB: 36.4,
      positiveO: 30.7,
      negativeO: 30.7
    } as StorageStatistic;
  }

  private getMockDonations(){
    return [
      {
        id: 1,
        fullName: "Muntean Mihai",
        bloodType: BloodType[1],
        dateTime: new Date(),
        email: "mmuntean44@gmail.com",
        location: "Spitalul Sfanta Treime",
        phoneNumber: "69-398-586",
        rhFactor: RhFactor[0],
        status: Status.OnReview
      },
      {
        id: 2,
        fullName: "Doe John",
        bloodType: BloodType[0],
        rhFactor: RhFactor[1],
        dateTime: new Date(),
        email: "johndoe@example.com",
        location: "City Hospital",
        phoneNumber: "123-456-789",
        status: Status.OnReview
      },
      {
        id: 3,
        fullName: "Garcia Sofia",
        bloodType: BloodType[2],
        rhFactor: RhFactor[0],
        dateTime: new Date("2023-10-06T08:30:00"),
        email: "sofiagarcia@example.com",
        location: "Regional Medical Center",
        phoneNumber: "987-654-321",
        status: Status.Completed
      },
      {
        id: 4,
        fullName: "Chen Wei",
        bloodType: BloodType[3],
        dateTime: new Date(),
        email: "weichen@example.com",
        location: "University Hospital",
        phoneNumber: "111-222-333",
        rhFactor: RhFactor[1],
        status: Status.Approved
      },
      {
        id: 5,
        fullName: "Patel Priya",
        bloodType: BloodType[1],
        dateTime: new Date(),
        email: "priyapatel@example.com",
        location: "Community Health Clinic",
        phoneNumber: "777-888-999",
        rhFactor: RhFactor[0],
        status: Status.OnReview
      }
    ] as Donation[];
  }

}
