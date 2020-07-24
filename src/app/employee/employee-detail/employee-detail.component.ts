import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { EmployeeService } from '../employee.service';
import { filter } from 'rxjs/operators';

@Component({
  selector: 'app-employee-detail',
  templateUrl: './employee-detail.component.html',
  styleUrls: ['./employee-detail.component.scss']
})
export class EmployeeDetailComponent implements OnInit {

  employees
employeeid;
  constructor(private route:ActivatedRoute,private employeeService:EmployeeService) { }

  ngOnInit(): void {
    
    this.route.params.subscribe(params=>{
      
      this.employeeid = +params['id'];
      
      });

     this.employeeService.getEmployee(this.employeeid).subscribe(data=>{
       this.employees=data;
       
      });

}
}
