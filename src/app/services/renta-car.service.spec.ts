import { TestBed } from '@angular/core/testing';

import { RentaCarService } from './renta-car.service';

describe('RentaCarService', () => {
  let service: RentaCarService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RentaCarService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
