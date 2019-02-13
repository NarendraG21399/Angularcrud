import { Component, OnInit } from '@angular/core';
import { AllEmployeeService } from '../Services/AllEmployeeServices/all-employee.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { DeleteEmployeeService } from '../Services/DeleteEmployeeServices/delete-employee.service';
@Component({
  selector: 'app-delete',
  templateUrl: './delete.component.html',
  styleUrls: ['./delete.component.css']
})
export class DeleteComponent implements OnInit {

  EmployeeData = [];
  constructor(private Employee: AllEmployeeService, private http: HttpClient, private deleteEmployeeService: DeleteEmployeeService) {
    this.Employee.getallEmployeedata().subscribe((data: any) => {
      this.EmployeeData = data;
      console.log(data);
    },
      err => {
        console.log(err);
      }
    );
  }

  ngOnInit() {
  }

  delete(Id, Name) {
    if (confirm('do you want to delete the employee')) {
      this.deleteEmployeeService.DeleteEmployee(Id, Name).subscribe((data) => {
        console.log(data);
      },
        err => {
          console.log(err);
        }
      );

    }
  }
}
