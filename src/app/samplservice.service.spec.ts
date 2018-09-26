import { TestBed, inject } from '@angular/core/testing';

import { SamplserviceService } from './samplservice.service';

describe('SamplserviceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [SamplserviceService]
    });
  });

  it('should be created', inject([SamplserviceService], (service: SamplserviceService) => {
    expect(service).toBeTruthy();
  }));
});
