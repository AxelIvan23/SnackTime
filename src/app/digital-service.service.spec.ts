import { TestBed } from '@angular/core/testing';

import { DigitalServiceService } from './digital-service.service';

describe('DigitalServiceService', () => {
  let service: DigitalServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DigitalServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
