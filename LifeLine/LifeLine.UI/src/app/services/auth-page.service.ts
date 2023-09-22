import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { LoginModel } from '../modules/auth/models/loginModel.component';
import { RegisterModel } from '../modules/auth/models/registerModel.component';

@Injectable({
  providedIn: 'root'
})

export class AuthPageService {
  private baseUrl: string = environment.apiBaseUrl + '/user';
  private jwtToken: string = "JWT Token from Backend";

  constructor(private http: HttpClient) { }


  private httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': `User Token: ${this.jwtToken}`
    })
  }

  singUp(userInfo: RegisterModel): Observable<RegisterModel> {
    return this.http.post<RegisterModel>(`${this.baseUrl}/register`, userInfo);
  }

  login(credentials: LoginModel): Observable<LoginModel> {
    localStorage.setItem('userData', JSON.stringify(credentials));
    return this.http.post<LoginModel>(`${this.baseUrl}/login`, credentials, this.httpOptions);
  }

}
