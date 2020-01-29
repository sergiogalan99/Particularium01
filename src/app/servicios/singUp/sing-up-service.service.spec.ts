import { TestBed } from '@angular/core/testing';

import { SingUpServiceService } from './sing-up-service.service';

describe('SingUpServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: SingUpServiceService = TestBed.get(SingUpServiceService);
    expect(service).toBeTruthy();
  });
});
