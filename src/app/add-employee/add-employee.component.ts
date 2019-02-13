import { Component, OnInit } from '@angular/core';
import { Employee } from './EmployeeModel';
import { AddEmployeeService } from '../Services/AddEmployeeService/add-employee.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-add-employee',
  templateUrl: './add-employee.component.html',
  styleUrls: ['./add-employee.component.css']
})
export class AddEmployeeComponent implements OnInit {
  employee = new Employee();
  constructor(private EmployeeService: AddEmployeeService, private router: Router) { }

  ngOnInit() {
  }
  AddDeatails() {
    console.log(this.employee);
    this.EmployeeService.AddEmployee(this.employee).subscribe((data) => {
      console.log(data);
      this.router.navigate(['']);
    },
      err => {
        console.log(err);
      }
    );
  }

}
