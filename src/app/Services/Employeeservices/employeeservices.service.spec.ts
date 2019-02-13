import { TestBed } from '@angular/core/testing';

import { EmployeeservicesService } from './employeeservices.service';

describe('EmployeeservicesService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: EmployeeservicesService = TestBed.get(EmployeeservicesService);
    expect(service).toBeTruthy();
  });
});
