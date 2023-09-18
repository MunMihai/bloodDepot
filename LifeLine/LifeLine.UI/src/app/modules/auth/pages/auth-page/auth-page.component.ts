import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthPageService } from 'src/app/services/auth-page.service';
import { RegisterModel } from '../../models/registerModel.component';

@Component({
  selector: 'app-auth-page',
  templateUrl: './auth-page.component.html',
  styleUrls: ['./auth-page.component.css']
})
export class AuthPageComponent {

  showLogin: boolean = true;

  constructor(private authServices: AuthPageService, private router: Router) { }

  onLogin() {
    // const userMock : User ={
    //   username: "Pavel",
    //   password: "abc123",
    //   confirmPassword: "abc123",
    this.authServices.login(null).subscribe(
      (response) => {
        //o rutare ex. this.router.navigate(['rutaReala'])
      },
      (error) => {
        console.error('Login Error: ',error);
      },
      ()=>{
        alert('Login Execued!');
      }
    );
  }

  onRegister(user: RegisterModel) {
    console.log('user', user);
    this.authServices.singUp(user).subscribe(
        (response) => {
          console.log('response from registration', user);
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
