import { Component, EventEmitter, Output } from '@angular/core';
import { LoginModel } from '../../models/loginModel.component';
import { FormControl, FormGroup, Validators } from '@angular/forms';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  @Output() onSubmit = new EventEmitter<LoginModel>();

  public loginForm: FormGroup = new FormGroup({
    userName: new FormControl('', [Validators.required]),
    password: new FormControl('', [Validators.required]),
    rememberMe: new FormControl(false)
  })

  submit() {
    if(this.loginForm.invalid){
      this.loginForm.markAsTouched();
      console.log('login current form', this.loginForm);
      return;
    }

    const formValue = this.loginForm.value as LoginModel;

    this.onSubmit.emit(formValue)
  }
}
