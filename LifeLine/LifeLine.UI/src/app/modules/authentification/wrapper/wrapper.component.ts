import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthentificationService } from '../services/authentification.service';
import { LoginDto } from '../models/login-dto';
import { RegisterDto } from '../models/register-dto';

@Component({
  selector: 'app-wrapper',
  templateUrl: './wrapper.component.html',
  styleUrls: ['./wrapper.component.css']
})
export class WrapperComponent {
  showLogin: boolean = true;
  public invalidCredentials: boolean = false;

  constructor
  (
    private authService: AuthentificationService,
    private router: Router
  ){}

  public toggleLogin(){
    this.showLogin = !this.showLogin;
  }

  public onLogin(loginDto: LoginDto){
    this.authService.login(loginDto).subscribe(
      (response) => {
        console.log('response from login: ', loginDto);
      },
      (error) => {
        console.error('Login Error: ',error)
      },
      ()=>{
      alert('Login Executed!');
      }
    )
  }

  public onRegister(registerDto: RegisterDto){
    this.authService.register(registerDto).subscribe(
      (response) => {
        console.log('response from registration', registerDto);
      },
      (error) => {
        console.error('Register Error: ',error)
      },
      ()=>{
      alert('Register Executed!');
      }
    );
  }
}
