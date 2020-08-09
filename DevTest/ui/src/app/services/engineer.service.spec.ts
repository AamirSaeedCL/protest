import { TestBed } from '@angular/core/testing';

import { EngineerService } from './engineer.service';

describe('EngineerService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: EngineerService = TestBed.get(EngineerService);
    expect(service).toBeTruthy();
  });
});
