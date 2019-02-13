import { Component, OnInit } from '@angular/core';
import { EmployeeservicesService } from '../Services/Employeeservices/employeeservices.service';

@Component({
  selector: 'app-employee-deatails',
  templateUrl: './employee-deatails.component.html',
  styleUrls: ['./employee-deatails.component.css']
})
export class EmployeeDeatailsComponent implements OnInit {
  EmployeeData = [];
  constructor(private Employee: EmployeeservicesService) { }

  ngOnInit() {
    this.Employee.GetEmployeeDeatails().subscribe((data: any) => {
      this.EmployeeData = data;
      console.log(data);
    },
      err => {
        console.log('json data not found:', err);
      }
    );
  }

}
