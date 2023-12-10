import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BloodChartComponent } from './blood-chart.component';

describe('BloodChartComponent', () => {
  let component: BloodChartComponent;
  let fixture: ComponentFixture<BloodChartComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BloodChartComponent]
    });
    fixture = TestBed.createComponent(BloodChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
