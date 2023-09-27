import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { DonateBloodModel } from '../models/donateBlood.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DonateBloodService {
  private baseUrl: string = environment.apiBaseUrl;

  constructor(private http: HttpClient) { }

  sendDonationRequest(donationData: DonateBloodModel): Observable<DonateBloodModel>{
    return this.http.post<DonateBloodModel>(this.baseUrl ,donationData);
  }
}
