import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { RequestBloodModel } from '../models/requestBlood.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RequestBloodService {
private baseUrl: string = environment.apiBaseUrl;

  constructor(private http: HttpClient) { }

  sendBloodRequest(request: RequestBloodModel): Observable<RequestBloodModel>{
    return this.http.post<RequestBloodModel>(this.baseUrl, request);
  }
}
