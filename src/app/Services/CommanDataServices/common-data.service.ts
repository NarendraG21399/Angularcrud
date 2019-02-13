import { Injectable } from '@angular/core';
import { Employee } from 'src/app/add-employee/EmployeeModel';

@Injectable({
  providedIn: 'root'
})
export class CommonDataService {

 Employe = new Employee();
  constructor() {
   }
}
