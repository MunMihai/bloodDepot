import { Component, EventEmitter, Output } from '@angular/core';
import { AbstractControl, FormControl, FormGroup, ValidationErrors, ValidatorFn, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { RegisterModel } from '../../models/registerModel.component';
import { BloodType } from 'src/app/enums/blood-type';
import { RhFactor } from 'src/app/enums/rh-factor';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  @Output() onSubmit = new EventEmitter<RegisterModel>();
  public registerForm: FormGroup = new FormGroup({
    fullName: new FormControl('', [Validators.required]),
    securityNumber: new FormControl('', [Validators.required]),
    country: new FormControl('', [Validators.required]),
    city: new FormControl('', [Validators.required]),
    gender: new FormControl('', [Validators.required]),
    birthDay: new FormControl('', [Validators.required]),
    bloodType: new FormControl('', [Validators.required]),
    rhFactor: new FormControl('', [Validators.required]),
    phoneNumber: new FormControl('', [Validators.required]),
    email: new FormControl('', [Validators.required, Validators.email]),
    userName: new FormControl('', [Validators.required]),
    password: new FormControl('', [Validators.required, Validators.minLength(8), createPasswordStrengthValidator()]),
    confirmPassword: new FormControl('', [Validators.required,]),
    agreeToTerms: new FormControl( false ,[Validators.required, ])
  })

  public step: any = 0;
  constructor(private route: Router) { }

  submit() {
    
    if (this.registerForm.invalid) {
      this.registerForm.markAllAsTouched();
      console.log('register current form', this.registerForm);
      return;
    }

    const formValue = this.registerForm.value as RegisterModel;

    this.onSubmit.emit(formValue);

  }

  isPasswordStrongEnough(): boolean {
    return this.registerForm.get('password')?.hasError('passwordStrength') === false;
  }
  
  isCurrentStepValid(): boolean | undefined{
    this.registerForm.markAllAsTouched();
    if (this.step === 0) { 
      return this.registerForm.get('fullName')?.valid &&
             this.registerForm.get('securityNumber')?.valid &&
             this.registerForm.get('country')?.valid &&
             this.registerForm.get('city')?.valid &&
             this.registerForm.get('gender')?.valid &&
             this.registerForm.get('birthDay')?.valid &&
             this.registerForm.get('bloodType')?.valid &&
             this.registerForm.get('phoneNumber')?.valid &&
             this.registerForm.get('email')?.valid && 
             this.isPasswordStrongEnough() ; // Adăugați verificarea forței parolei aici
    } else if (this.step === 1) {
      return this.registerForm.get('userName')?.valid &&
             this.registerForm.get('password')?.valid &&
             this.registerForm.get('confirmPassword')?.valid &&
             this.registerForm.get('agreeToTerms')?.value === true;
    } else {
      return true; // Dacă nu sunteți pe pasul 0 sau 1, considerăm întotdeauna că este valid
    }
  }
  
  previous() {
    this.step = this.step - 1;
  }

  public next(): void {
    if(this.isCurrentStepValid()){
      this.step++;
      this.registerForm.markAsUntouched();
    }
  }

  get email() {
    return this.registerForm.get(['email']);
  }
  
  getRhFactorValues() {
    return Object.values(RhFactor);
  }

  getBloodTypeValues() {
    return Object.values(BloodType);
  }

}
export function createPasswordStrengthValidator(): ValidatorFn {
  return (control: AbstractControl): ValidationErrors | null => {

    const value = control.value;

    if (!value) {
      return null;
    }
    if (value.length < 8) {
      return { passwordLength: true };
    }

    const hasUpperCase = /[A-Z]+/.test(value);

    const hasLowerCase = /[a-z]+/.test(value);

    const hasNumeric = /[0-9]+/.test(value);

    const passwordValid = hasUpperCase && hasLowerCase && hasNumeric;

    return !passwordValid ? { passwordStrength: true } : null;
  }
}
