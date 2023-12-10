import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { RequestBlood } from '../models/Entities/request-blood';

@Injectable({
  providedIn: 'root'
})
export class RequestBloodService {
  private baseUrl: string = environment.apiUrl;

  constructor(private http: HttpClient) { }

  sendBloodRequest(request: RequestBlood): Observable<RequestBlood>{
    console.log("Is sending: ", request)
    return this.http.post<RequestBlood>(this.baseUrl, request);
  }
}
