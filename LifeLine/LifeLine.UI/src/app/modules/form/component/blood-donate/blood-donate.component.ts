import { Component, EventEmitter, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
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
  @Output() onSubmit = new EventEmitter();

  constructor(
    private currentUser: CurrentUserService,
  ) { }

  public bloodType = BloodType;
  public rhFactor = RhFactor;

  public donateForm: FormGroup = new FormGroup({
    fullName: new FormControl(this.currentUser.currentUser?.username, [Validators.required]),
    phoneNumber: new FormControl('069xxxxxxx', [Validators.required]),
    email: new FormControl('test@mail.co', [Validators.required, Validators.email]),
    bloodType: new FormControl('', [Validators.required]),
    rhFactor: new FormControl('', [Validators.required]),
    quantity: new FormControl(500),
    location: new FormControl('Chisinau', [Validators.required]),
    dateTime: new FormControl(Date.now, [Validators.required]),
    status: new FormControl(Status.OnReview)
  })


  submit() {
    if (this.donateForm.invalid) {
      this.donateForm.markAllAsTouched();
      console.log("Errors: ", this.donateForm);
      return;
    }

    const formValue = this.donateForm.value as DonateBloodModel;
    
    this.onSubmit.emit(formValue);
    console.log("Success: ", formValue);
  }

}
