import { Component, OnInit } from '@angular/core';
import { CommonDataService } from '../Services/CommanDataServices/common-data.service';
import { Employee } from '../add-employee/EmployeeModel';
import { EditEmployeeService } from '../Services/EditEmployeeServices/edit-employee.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-update-employee',
  templateUrl: './update-employee.component.html',
  styleUrls: ['./update-employee.component.css']
})
export class UpdateEmployeeComponent implements OnInit {
  employeDeatails = new Employee();
  constructor(private common: CommonDataService, private editservices: EditEmployeeService, private router: Router) {

  }
  ngOnInit() {
    this.employeDeatails.EmployeeId = this.common.Employe.EmployeeId;
    this.employeDeatails.EmployeeName = this.common.Employe.EmployeeName;
    this.employeDeatails.Designation = this.common.Employe.Designation;
    this.employeDeatails.Dob = this.common.Employe.Dob;
    this.employeDeatails.Salary = this.common.Employe.Salary;
  }

  Update() {
    this.editservices.UpdateEmployee(this.common.Employe.EmployeeId, this.common.Employe.EmployeeName, this.employeDeatails.Designation,
      this.employeDeatails.Dob, this.employeDeatails.Salary).subscribe((data) => {
        console.log(data);
        this.router.navigate(['']);
      },
      err => {
        console.log(err);
      });
  }
}
