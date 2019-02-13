import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Config } from 'src/Config';
import { HttpHeaders } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class EditEmployeeService {

  constructor(private http: HttpClient, private config: Config) {
  }

  UpdateEmployee(Id, Name, designation, dob , salary) {
    const Employee = {
      EmployeeId: Id,
      EmployeeName: Name,
      Designation: designation,
      Dob: dob,
      Salary : salary
    };
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    };
    return this.http.post(this.config.UpdateUrl, Employee, httpOptions);

  }
}
