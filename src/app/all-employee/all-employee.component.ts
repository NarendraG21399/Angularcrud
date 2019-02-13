import { Component, OnInit } from '@angular/core';
import { AllEmployeeService } from '../Services/AllEmployeeServices/all-employee.service';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-all-employee',
  templateUrl: './all-employee.component.html',
  styleUrls: ['./all-employee.component.css']
})
export class AllEmployeeComponent implements OnInit {
  EmployeeData = [];
  constructor(private Employee: AllEmployeeService, private http: HttpClient) {
  }

  ngOnInit() {
    this.Employee.getallEmployeedata().subscribe((data: any) => {
      this.EmployeeData = data;
      console.log(data);
    },
      err => {
        console.log(err);
      }
    );
  }
}
