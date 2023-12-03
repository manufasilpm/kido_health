import { TestBed } from '@angular/core/testing';

import { SlotService } from './slot.service';

describe('HospitalService', () => {
  let service: SlotService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SlotService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
