import { TestBed } from '@angular/core/testing';

import { BilleterieService } from './billeterie.service';

describe('BilleterieService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: BilleterieService = TestBed.get(BilleterieService);
    expect(service).toBeTruthy();
  });
});
