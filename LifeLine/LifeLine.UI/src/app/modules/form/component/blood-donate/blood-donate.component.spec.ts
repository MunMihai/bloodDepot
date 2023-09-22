import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BloodDonateComponent } from './blood-donate.component';

describe('BloodDonateComponent', () => {
  let component: BloodDonateComponent;
  let fixture: ComponentFixture<BloodDonateComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BloodDonateComponent]
    });
    fixture = TestBed.createComponent(BloodDonateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
