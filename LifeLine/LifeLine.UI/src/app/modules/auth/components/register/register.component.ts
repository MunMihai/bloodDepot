import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  public registerForm: FormGroup = new FormGroup({
    userName: new FormControl('Name', [Validators.required]),
    password: new FormControl('Password', [Validators.required]),
    confirmPassword: new FormControl('NAme', [Validators.required])
  })
}
