import { TestBed } from '@angular/core/testing';

import { DonateBloodService } from './donate-blood.service';

describe('DonateBloodServiceService', () => {
  let service: DonateBloodService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DonateBloodService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
