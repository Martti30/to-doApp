import { TestBed } from '@angular/core/testing';

import { OptionenService } from './optionen.service';

describe('OptionenService', () => {
  let service: OptionenService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(OptionenService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
