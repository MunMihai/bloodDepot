import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AuthPageService {

  private baseUrl: string = environment.apiBaseUrl+ '/user';
  constructor(private http: HttpClient) { }

  singUp(userInfo: any): Observable<any> {
    return this.http.post<any>(`${this.baseUrl}/register`, userInfo);
  }

  login(credentials: any): Observable<any> {
    return this.http.post<any>(`${this.baseUrl}/login`, credentials);
  }

}
