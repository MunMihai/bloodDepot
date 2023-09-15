import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BlodunitListComponent } from './blodunit-list.component';

describe('BlodunitListComponent', () => {
  let component: BlodunitListComponent;
  let fixture: ComponentFixture<BlodunitListComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BlodunitListComponent]
    });
    fixture = TestBed.createComponent(BlodunitListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
