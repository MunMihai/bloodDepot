import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormsWrapperComponent } from './forms-wrapper.component';

describe('FormsWrapperComponent', () => {
  let component: FormsWrapperComponent;
  let fixture: ComponentFixture<FormsWrapperComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FormsWrapperComponent]
    });
    fixture = TestBed.createComponent(FormsWrapperComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
