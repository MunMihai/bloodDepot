import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DonationsTableComponent } from './donations-table.component';

describe('RequestsTableComponent', () => {
  let component: DonationsTableComponent;
  let fixture: ComponentFixture<DonationsTableComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DonationsTableComponent]
    });
    fixture = TestBed.createComponent(DonationsTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
