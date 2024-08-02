import { TestBed } from '@angular/core/testing';

import { EmployeeMockDataService } from './employee-mock-data.service';

describe('EmployeeMockDataService', () => {
  let service: EmployeeMockDataService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EmployeeMockDataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
