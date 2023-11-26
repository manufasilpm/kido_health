import { TestBed } from '@angular/core/testing';

import { VaccineService } from './vaccineservice.service';

describe('ParentserviceService', () => {
  let service: VaccineService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(VaccineService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
