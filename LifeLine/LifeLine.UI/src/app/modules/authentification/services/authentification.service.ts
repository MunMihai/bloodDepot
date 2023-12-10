import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { RegisterDto } from '../models/register-dto';
import { Observable } from 'rxjs';
import { LoginDto } from '../models/login-dto';
import { JwtAuth } from '../models/jwt-auth';
import { User } from 'src/app/shared/models/user';

@Injectable({
  providedIn: 'root'
})
export class AuthentificationService {
  private baseUrl: string = environment.apiUrl + '/user';

  constructor(private http: HttpClient) { }

  register(user: RegisterDto): Observable<JwtAuth> {
    return this.http.post<JwtAuth>(`${this.baseUrl}/register`, user);
  }
  login(credentials: LoginDto): Observable<JwtAuth> {
    return this.http.post<JwtAuth>(`${this.baseUrl}/login`, credentials);
  }

  getUserByAccessToken(): Observable<User> {
    return this.http.get<User>(`${this.baseUrl}/user`);
  }
}
