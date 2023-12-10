import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { DonateBlood } from '../models/Entities/donate-blood';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DonateBloodService {
  private baseUrl: string = environment.apiUrl;

  constructor(private http: HttpClient) { }

  sendDonationRequest(donationData: DonateBlood): Observable<DonateBlood>{
    console.log("Is sending: ", donationData)
    return this.http.post<DonateBlood>(this.baseUrl ,donationData);
  }
}
