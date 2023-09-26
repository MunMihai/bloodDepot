import { Component, EventEmitter, Output } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder, FormArray } from '@angular/forms';
import { BloodType } from 'src/app/enums/blood-type';
import { RhFactor } from 'src/app/enums/rh-factor';
import { Status } from 'src/app/enums/status';
import { BloodModel } from 'src/app/models/blood.model';
import { RequestBloodModel } from 'src/app/models/requestBlood.model';

const maxRequests = Object.keys(BloodType).length * Object.keys(RhFactor).length;
let request: number = 1;

@Component({
  selector: 'app-blood-request',
  templateUrl: './blood-request.component.html',
  styleUrls: ['./blood-request.component.css']
})
export class BloodRequestComponent {
  @Output() onSubmit: EventEmitter<RequestBloodModel> = new EventEmitter<RequestBloodModel>();

  bloodType = BloodType;
  rhFactor = RhFactor;

  requestBloodForm: FormGroup;
  constructor(
    private fb: FormBuilder
  ) {
    this.requestBloodForm = this.fb.group({
      name: ['', Validators.required],
      phoneNumber: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      status: [Status.OnReview],
      blood: this.fb.array([
        this.createBloodGroup(0)
      ])
    })

  }

  createBloodGroup(index: number) {
    return this.fb.group({
      bloodType: ['', Validators.required],
      rhFactor: ['', Validators.required],
      quantity: ['', [Validators.required, Validators.min(0)]]
    });
  }

  addBloodGroup() {
    if (request < maxRequests) {
      request++;
      const bloodArray = this.requestBloodForm.get('blood') as FormArray;
      bloodArray.push(this.createBloodGroup(bloodArray.length));
    }
  }

  removeBloodgroup(index: number) {
    request--;
    const bloodArray = this.requestBloodForm.get('blood') as FormArray;
    bloodArray.removeAt(index);
  }

  getBloodControls() {
    return (this.requestBloodForm.get('blood') as FormArray).controls;
  }

  getRhFactorValues() {
    return Object.values(this.rhFactor);
  }

  getBloodTypeValues() {
    return Object.values(BloodType);
  }

  submit() {
    if (this.requestBloodForm.valid) {
      const form = this.requestBloodForm.value as RequestBloodModel;
      this.onSubmit.emit(form);
      console.log('Succes: ', form);
    }
    else {
      this.requestBloodForm.markAllAsTouched();
      console.error('Error: ', this.requestBloodForm);
    }
  }
}
