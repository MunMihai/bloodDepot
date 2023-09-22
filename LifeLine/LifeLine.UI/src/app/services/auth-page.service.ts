import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { RegisterModel } from '../modules/auth/models/registerModel.component';
import { UserModel } from '../models/user.model';
import { LoginModel } from '../modules/auth/models/login.model';

@Injectable({
  providedIn: 'root'
})

export class AuthPageService {
  private baseUrl: string = environment.apiBaseUrl + '/user';
  private jwtToken: string = "JWT Token from Backend";

  constructor(private http: HttpClient) { }

  singUp(userInfo: RegisterModel): Observable<RegisterModel> {
    return this.http.post<RegisterModel>(`${this.baseUrl}/register`, userInfo);
  }

  /**
   * 
   * @returns a JWT token which current user can use for authentication
   */
  login(credentials: LoginModel): Observable<string> {
    return this.http.post<any>(`${this.baseUrl}/login`, credentials);
  }

  getUserByAccessToken(): Observable<UserModel> {
    return this.http.get<UserModel>(`${this.baseUrl}/user`);
  }
}
