import { TestBed } from '@angular/core/testing';

import { CommerceService } from './commerce.service';

describe('commerceService', () => {
  let service: CommerceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CommerceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
