import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthPageService } from 'src/app/services/auth-page.service';
import { RegisterModel } from '../../models/registerModel.component';
import { LoginModel } from '../../models/login.model';
import { CurrentUserService } from 'src/app/services/current-user.service';
import { switchMap, tap } from 'rxjs';

@Component({
  selector: 'app-auth-page',
  templateUrl: './auth-page.component.html',
  styleUrls: ['./auth-page.component.css']
})
export class AuthPageComponent {

  showLogin: boolean = true;
  public invalidCredentials: boolean = false;

  constructor(
    private authServices: AuthPageService,
    private router: Router,
    private currentUserService: CurrentUserService
    ) { }

  onLogin(loginFormData: LoginModel) {
    // const userMock : User ={
    //   username: "Pavel",
    //   password: "abc123",
    //   confirmPassword: "abc123",
    this.authServices.login(loginFormData).pipe(
      tap((authenticationToken) => {
        localStorage.setItem('authentication_token', authenticationToken);
      }),
      switchMap((authenticationToken) => this.authServices.getUserByAccessToken())
    ).subscribe({
      next: (authenticatedUser) => {
        this.invalidCredentials = false;
        this.currentUserService.currentUser = authenticatedUser;
        void this.router.navigate(['home']);
      },
      error: (error) => {
        console.error('Login Error: ',error);
        this.invalidCredentials = true;
      },
      complete: ()=>{
        alert('Login Execued!');
      }
    });
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
