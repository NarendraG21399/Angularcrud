import { Component, OnInit } from '@angular/core';
import { AllEmployeeService } from '../Services/AllEmployeeServices/all-employee.service';
import { HttpClient } from '@angular/common/http';
import { CommonDataService } from '../Services/CommanDataServices/common-data.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {
  EmployeeData = [];
  constructor(private Employee: AllEmployeeService, private http: HttpClient, private commondata: CommonDataService,
    private router: Router) { }

  ngOnInit() {
    this.Employee.getallEmployeedata().subscribe((data: any) => {
      this.EmployeeData = data;
      console.log(this.EmployeeData);
    },
      err => {
        console.log(err);
      }
    );
  }
  Upadate(Id, Name, Designation, Dob, Salary) {
    console.log(Id, Name);
    this.router.navigate(['/editemployyee']);
    this.commondata.Employe.EmployeeId = Id;
    this.commondata.Employe.EmployeeName = Name;
    this.commondata.Employe.Dob = Dob;
    this.commondata.Employe.Designation = Designation;
    this.commondata.Employe.Salary = Salary;
  }
}
