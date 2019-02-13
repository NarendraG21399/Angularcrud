import { Injectable } from '@angular/core';
import { Config } from 'src/Config';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class AllEmployeeService {

  constructor(private EmployeeAll: Config, private Http: HttpClient) { }

  getallEmployeedata() {
    return this.Http.get(this.EmployeeAll.AllEmployeeUrl);
  }
}
