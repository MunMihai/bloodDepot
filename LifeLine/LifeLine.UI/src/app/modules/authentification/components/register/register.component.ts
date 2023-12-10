import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { RegisterDto } from '../../models/register-dto';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CreatePasswordStrengthValidator } from './helper/create-password-strength-validator';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  @Output() register = new EventEmitter<RegisterDto>();

  constructor
    (
      private fb: FormBuilder,
      private route: Router
    ) { }

  public registerForm!: FormGroup;
  ngOnInit() {
    this.registerForm = this.fb.group({
      fullName: ['', [Validators.required]],
      securityNumber: ['', [Validators.required]],
      country: ['', [Validators.required]],
      city: ['', [Validators.required]],
      gender: ['', [Validators.required]],
      birthDay: ['', [Validators.required]],
      bloodType: ['', [Validators.required]],
      rhFactor: ['', [Validators.required]],
      phoneNumber: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.email]],
      userName: ['', [Validators.required]],
      password: ['', [Validators.required, Validators.minLength(8), CreatePasswordStrengthValidator()]],
      confirmPassword: ['', [Validators.required]],
      agreeToTerms: [false, [Validators.required]]
    });
  }

  public step = 0;

  public submit(): void {
    this.registerForm.markAllAsTouched();
    if (this.registerForm.invalid) {
      return;
    }

    const registerDto = this.registerForm.value;
    this.register.next(registerDto as RegisterDto);
  }

  isPasswordStrongEnough(): boolean {
    return this.registerForm.get('password')?.hasError('passwordStrength') === false;
  }

  isCurrentStepValid(): boolean | undefined {
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
        this.isPasswordStrongEnough();
    } else if (this.step === 1) {
      return this.registerForm.get('userName')?.valid &&
        this.registerForm.get('password')?.valid &&
        this.registerForm.get('confirmPassword')?.valid &&
        this.registerForm.get('agreeToTerms')?.value === true;
    } else {
      return true;
    }
  }

  public previous() {
    this.step--;
  }

  public next(): void {
    if (this.isCurrentStepValid()) {
      this.step++;
      this.registerForm.markAsUntouched();
    }
  }

  get email() {
    return this.registerForm.get(['email']);
  }
}
