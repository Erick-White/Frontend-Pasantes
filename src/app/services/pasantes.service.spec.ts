import { TestBed } from '@angular/core/testing';

import { PasantesService } from './pasantes.service';

describe('PasantesService', () => {
  let service: PasantesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PasantesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
