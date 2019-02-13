import { TestBed } from '@angular/core/testing';

import { AllEmployeeService } from './all-employee.service';

describe('AllEmployeeService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AllEmployeeService = TestBed.get(AllEmployeeService);
    expect(service).toBeTruthy();
  });
});
