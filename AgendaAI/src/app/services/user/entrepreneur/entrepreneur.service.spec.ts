import { TestBed } from '@angular/core/testing';

import {entrepreneurService} from './entrepreneur.service';

describe('entrepreneurService', () => {
  let service: entrepreneurService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(entrepreneurService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});


