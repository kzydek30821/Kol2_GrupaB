import { TestBed } from '@angular/core/testing';

import { KzDataService } from './kz-data.service';

describe('KzDataService', () => {
  let service: KzDataService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(KzDataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
