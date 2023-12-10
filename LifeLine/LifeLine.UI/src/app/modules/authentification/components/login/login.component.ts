import { Component, EventEmitter, Input, Output } from '@angular/core';
import { LoginDto } from '../../models/login-dto';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  @Output() login = new EventEmitter<LoginDto>();
  @Input() areCredentialsInvalid: boolean = false;

  public loginForm = new FormGroup({
    username: new FormControl('', [Validators.required]),
    password: new FormControl('', [Validators.required])
  })

  public loginSubmit(): void {
    this.loginForm.markAllAsTouched();
    if(this.loginForm.invalid) {
      return;
    }

    const loginDto = this.loginForm.value;

    this.login.next(loginDto as LoginDto);
  }
}
