import { Component, EventEmitter, Output } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { BloodType } from 'src/app/enums/blood-type';
import { RhFactor } from 'src/app/enums/rh-factor';
import { Status } from 'src/app/enums/status';
import { DonateBloodModel } from 'src/app/models/donateBlood.model';
import { UserModel } from 'src/app/models/user.model';
import { CurrentUserService } from 'src/app/services/current-user.service';


@Component({
  selector: 'app-blood-donate',
  templateUrl: './blood-donate.component.html',
  styleUrls: ['./blood-donate.component.css']
})
export class BloodDonateComponent {
  @Output() onSubmit = new EventEmitter<DonateBloodModel>;

  donateBloodForm: FormGroup;
  bloodFormGroup: FormGroup;

  constructor(
    private fb: FormBuilder
  ) {

    this.bloodFormGroup = this.fb.group({
      bloodType: ['', [Validators.required]],
      rhFactor: ['', [Validators.required]],
      quantity: [500],
    });

    this.donateBloodForm = this.fb.group({
      fullName: ['Mihai', { nonNullable: true }],
      phoneNumber: ['069xxxxxxx', [Validators.required]],
      email: ['test@mail.co', [Validators.required, Validators.email]],
      blood: this.bloodFormGroup,
      location: ['Chisinau', [Validators.required]],
      dateTime: [Date.now, [Validators.required]],
      status: [Status.OnReview]
    })
  }




  getBloodControls() {
    return (this.donateBloodForm.get('blood') as FormArray).controls;
  }

  getRhFactorValues() {
    return Object.values(RhFactor);
  }

  getBloodTypeValues() {
    return Object.values(BloodType);
  }

  submitForm() {
    if (this.donateBloodForm.valid) {
      const form = this.donateBloodForm.value as DonateBloodModel;
      this.onSubmit.emit(form);
      console.log("Success: ", form);
    }
    else {
      this.donateBloodForm.markAllAsTouched();
      console.error("Error: ", this.donateBloodForm);
    }
  }
}
