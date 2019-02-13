import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class DeleteEmployeeService {

  constructor(private Http: HttpClient) { }

  DeleteEmployee(Id, Name) {
    const Employeedata = {
      EmployeeId: Id,
      EmployeeName: Name
    };
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    };
    return this.Http.post('http://localhost:8060/EmployeeDelete', Employeedata, httpOptions);

  }
}
