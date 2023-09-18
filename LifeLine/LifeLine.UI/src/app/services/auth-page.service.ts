import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { RegisterModel } from '../modules/auth/models/registerModel.component';

@Injectable({
  providedIn: 'root'
})
export class AuthPageService {
  private baseUrl: string = environment.apiBaseUrl+ '/user';

  constructor(private http: HttpClient) { }

  singUp(userInfo: RegisterModel): Observable<RegisterModel> {
    return this.http.post<RegisterModel>(`${this.baseUrl}/register`, userInfo);
  }

  login(credentials: any): Observable<any> {
    return this.http.post<any>(`${this.baseUrl}/login`, credentials);
  }

}
