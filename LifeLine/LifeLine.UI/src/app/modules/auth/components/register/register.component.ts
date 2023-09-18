import { Component } from '@angular/core';
import { AbstractControl, FormControl, FormGroup, ValidationErrors, ValidatorFn, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  public registerForm: FormGroup = new FormGroup({
    fullName: new FormControl('', [Validators.required]),
    securityNumber: new FormControl('', [Validators.required]),
    country: new FormControl('', [Validators.required]),
    city: new FormControl('', [Validators.required]),
    gender: new FormControl('', [Validators.required]),
    birthDay: new FormControl('', [Validators.required]),
    bloodType: new FormControl('', [Validators.required]),
    rhesus: new FormControl('', [Validators.required]),
    phoneNumber: new FormControl('', [Validators.required]),
    email: new FormControl('', [Validators.required, Validators.email]),
    userName: new FormControl('', [Validators.required]),
    password: new FormControl('', [Validators.required, Validators.minLength(8)]),
    confirmPassword: new FormControl('', [Validators.required,])
  })

  public step: any = 0;
  constructor(private route: Router) { }

  submit() {
    this.step = this.step + 1;
    if (this.step == 2) {
      this.route.navigate(["/login"])
    }
  }

  previous() {
    this.step = this.step - 1;
  }

  get email() {
    return this.registerForm.get(['email']);
  }
}
export function createPasswordStrengthValidator(): ValidatorFn {
  return (control: AbstractControl): ValidationErrors | null => {

    const value = control.value;

    if (!value) {
      return null;
    }

    const hasUpperCase = /[A-Z]+/.test(value);

    const hasLowerCase = /[a-z]+/.test(value);

    const hasNumeric = /[0-9]+/.test(value);

    const passwordValid = hasUpperCase && hasLowerCase && hasNumeric;

    return !passwordValid ? { passwordStrength: true } : null;
  }
}
