import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DonatesPageComponent } from './donates-page.component';

describe('DonatesPageComponent', () => {
  let component: DonatesPageComponent;
  let fixture: ComponentFixture<DonatesPageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DonatesPageComponent]
    });
    fixture = TestBed.createComponent(DonatesPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
