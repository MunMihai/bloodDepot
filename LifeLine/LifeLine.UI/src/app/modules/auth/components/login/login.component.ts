import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { LoginModel } from '../../models/login.model';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  @Output() login = new EventEmitter<LoginModel>();
  @Input() areCredentialsInvalid: boolean = false;

  public loginForm = new FormGroup({
    username: new FormControl('', [Validators.required]),
    password: new FormControl('', [Validators.required])
  })

  public loginSubmit(): void {
    if(this.loginForm.invalid) {
      return;
    }

    const formData = this.loginForm.value;

    this.login.next(formData as LoginModel);
  }
}
