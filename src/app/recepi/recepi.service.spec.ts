import { TestBed } from '@angular/core/testing';

import { RecepiService } from './recepi.service';

describe('RecepiService', () => {
  let service: RecepiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RecepiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
