import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Config } from 'src/Config';

@Injectable({
  providedIn: 'root'
})
export class EmployeeservicesService {
  UrlConfig = '';
  constructor(private http: HttpClient, private config: Config) {
    this.UrlConfig = this.config.Url;
  }
  GetEmployeeDeatails() {
    return this.http.get(this.UrlConfig);
  }
}
