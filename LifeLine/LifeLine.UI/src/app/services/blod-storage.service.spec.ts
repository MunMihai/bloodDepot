import { TestBed } from '@angular/core/testing';

import { BlodStorageService } from './blod-storage.service';

describe('BlodStorageService', () => {
  let service: BlodStorageService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BlodStorageService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
