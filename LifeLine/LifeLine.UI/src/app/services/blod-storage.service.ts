import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment.development';

@Injectable({
  providedIn: 'root'
})
export class BlodStorageService {

  url: string = environment.apiBaseUrl + '/BloodStorage';
  constructor(private http: HttpClient) { }
  getBlodStorage() {
    this.http.get(this.url).subscribe(
      {
        next: res => { console.log(res); }, 
        error: err => { console.log(err); }
      })
  }
  sendBlodUnit()
  {
    this.http.post(this.url, { }).subscribe(
      {
        next: res => { console.log(res); }, 
        error: err => { console.log(err); }
      })
  }
}
