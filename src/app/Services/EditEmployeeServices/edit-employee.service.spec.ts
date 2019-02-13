import { TestBed } from '@angular/core/testing';

import { EditEmployeeService } from './edit-employee.service';

describe('EditEmployeeService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: EditEmployeeService = TestBed.get(EditEmployeeService);
    expect(service).toBeTruthy();
  });
});
