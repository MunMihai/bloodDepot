import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BlodunitFormComponent } from './blodunit-form.component';

describe('BlodunitFormComponent', () => {
  let component: BlodunitFormComponent;
  let fixture: ComponentFixture<BlodunitFormComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BlodunitFormComponent]
    });
    fixture = TestBed.createComponent(BlodunitFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
