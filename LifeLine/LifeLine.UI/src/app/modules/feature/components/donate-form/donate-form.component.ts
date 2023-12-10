import { Component, EventEmitter, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Status } from '../../../../shared/Enums/status';
import { DonateBlood } from '../../models/Entities/donate-blood';
import { RhFactor } from '../../../../shared/Enums/rh-factor';
import { BloodType } from '../../../../shared/Enums/blood-type';
import { Route, Router } from '@angular/router';

@Component({
  selector: 'app-donate-form',
  templateUrl: './donate-form.component.html',
  styleUrls: ['./donate-form.component.css']
})
export class DonateFormComponent {
  @Output() onSubmit = new EventEmitter<DonateBlood>();

  donateBloodForm!: FormGroup;
  bloodFormGroup!: FormGroup;
  constructor(private fb: FormBuilder,
    private router: Router){
    this.bloodFormGroup = this.fb.group({
      bloodType: ['', [Validators.required]],
      rhFactor: ['', [Validators.required]],
      quantity: [500],
    });

    this.donateBloodForm = this.fb.group({
      fullName: ['Mihai', [Validators.required]],
      phoneNumber: ['69-398-586', [Validators.required]],
      email: ['test@mail.com', [Validators.required, Validators.email]],
      blood: this.bloodFormGroup,
      location: ['Chisinau', [Validators.required]],
      dateTime: [Date.now, [Validators.required]],
      status: [Status.OnReview]
    })
  }

  getRhFactorValues() {
    return Object.values(RhFactor).filter(value => typeof value === "string");
  }

  getBloodTypeValues() {
    return Object.values(BloodType).filter(value => typeof value === "string");
  }

  submitForm() {
    if (this.donateBloodForm.valid) {
      const donation: DonateBlood = {
        fullName: this.donateBloodForm.value.fullName,
        blood: this.donateBloodForm.value.blood ,
        phoneNumber: this.donateBloodForm.value.phoneNumber,
        email: this.donateBloodForm.value.email,
        location: this.donateBloodForm.value.location,
        dateTime: this.donateBloodForm.value.dateTime,
        status: this.donateBloodForm.value.status
      }

      this.onSubmit.emit(donation);
      this.router.navigate(['/Home'])
    }
    else {
      this.donateBloodForm.markAllAsTouched();
      console.error("Error: ", this.donateBloodForm);
    }
  }
}
