import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthPageService } from 'src/app/services/auth-page.service';

@Component({
  selector: 'app-auth-page',
  templateUrl: './auth-page.component.html',
  styleUrls: ['./auth-page.component.css']
})
export class AuthPageComponent {

  showLogin: boolean = true;

  constructor(private authServices: AuthPageService, private router: Router) { }

  onLogin(user: any) {
    this.authServices.login(user).subscribe(
      (response) => {
        console.log(`Logged: ${user}`);
      },
      (error) => {
        console.error('Login Error: ',error)
      },
      ()=>{
        alert('Login Execued!');
      }
    );
  }

  onRegister(user: any) {
    this.authServices.singUp(user).subscribe(
        (response) => {
          console.log(`Registerde: ${user}`);
        },
        (error) => {
          console.error('Register Error: ',error)
        },
        ()=>{
        alert('Register Execued!');
        }
    );
  }

}
