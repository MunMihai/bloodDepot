import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { BloodModel } from 'src/app/models/blood.model';

@Component({
  selector: 'app-blood-request',
  templateUrl: './blood-request.component.html',
  styleUrls: ['./blood-request.component.css']
})
export class BloodRequestComponent {
  requestBloodForm: FormGroup = new FormGroup({
  
  });

  submit(){

  }
}
