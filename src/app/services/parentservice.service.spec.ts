import { TestBed } from '@angular/core/testing';

import { ParentserviceService } from './parentservice.service';

describe('ParentserviceService', () => {
  let service: ParentserviceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ParentserviceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
