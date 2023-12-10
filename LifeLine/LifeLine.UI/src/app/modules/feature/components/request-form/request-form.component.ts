import { Component, EventEmitter, Output } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormArray } from '@angular/forms';
import { RequestBlood } from '../../models/Entities/request-blood';
import { BloodType } from '../../../../shared/Enums/blood-type';
import { RhFactor } from '../../../../shared/Enums/rh-factor';
import { Status } from '../../../../shared/Enums/status';
import { Router } from '@angular/router';

const maxRequests = Object.values(BloodType).filter(value=>typeof value === 'number').length *
 Object.values(RhFactor).filter(value=>typeof value === 'number').length;
let request: number = 1;

@Component({
  selector: 'app-request-form',
  templateUrl: './request-form.component.html',
  styleUrls: ['./request-form.component.css']
})
export class RequestFormComponent {
  @Output() onSubmit: EventEmitter<RequestBlood> = new EventEmitter<RequestBlood>();

  bloodType = BloodType;
  rhFactor = RhFactor;

  requestBloodForm: FormGroup;
  constructor(
    private fb: FormBuilder,
    private router: Router
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
    return Object.values(RhFactor).filter(value=> typeof value === 'string');
  }

  getBloodTypeValues() {
    return Object.values(BloodType).filter(value=> typeof value === 'string');
  }

  submitForm() {
    if (this.requestBloodForm.valid) {
      const request: RequestBlood = {
        name: this.requestBloodForm.value.name,
        blood: this.requestBloodForm.value.blood,
        phoneNumber: this.requestBloodForm.value.phoneNumber,
        email: this.requestBloodForm.value.email,
        status: this.requestBloodForm.value.status,
      }
      this.onSubmit.emit(request);
      this.router.navigate(['/Home'])
    }
    else {
      this.requestBloodForm.markAllAsTouched();
      console.error('Error: ', this.requestBloodForm);
    }
  }
}
