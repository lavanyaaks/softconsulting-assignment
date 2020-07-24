import { Component, OnInit } from '@angular/core';
import { EmployeeService } from './employee.service';
import { Employee } from '../models/employee.model';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.scss']
})
export class EmployeeComponent implements OnInit {

  employees;

  constructor(private employeeService:EmployeeService) { }

  ngOnInit() {
    this.employeeService.getAllEmployee().subscribe(employees=>{
      this.employees=employees;
    })
    
   
  }

}
