import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormsWrapperPageComponent } from './forms-wrapper-page.component';

describe('FormsWrapperPageComponent', () => {
  let component: FormsWrapperPageComponent;
  let fixture: ComponentFixture<FormsWrapperPageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FormsWrapperPageComponent]
    });
    fixture = TestBed.createComponent(FormsWrapperPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
