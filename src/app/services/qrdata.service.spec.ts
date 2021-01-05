import { TestBed } from '@angular/core/testing';

import { QRDataService } from './qrdata.service';

describe('QRDataService', () => {
  let service: QRDataService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(QRDataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
