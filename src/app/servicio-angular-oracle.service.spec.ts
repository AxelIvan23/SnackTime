import { TestBed } from '@angular/core/testing';

import { ServicioAngularOracleService } from './servicio-angular-oracle.service';

describe('ServicioAngularOracleService', () => {
  let service: ServicioAngularOracleService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ServicioAngularOracleService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
