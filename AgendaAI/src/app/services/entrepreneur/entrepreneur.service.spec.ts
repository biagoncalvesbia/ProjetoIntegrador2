import { TestBed } from '@angular/core/testing';

import {EntrepreneurService} from './entrepreneur.service';

describe('entrepreneurService', () => {
  let service: EntrepreneurService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EntrepreneurService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});


