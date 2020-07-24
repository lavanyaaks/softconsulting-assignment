import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map} from 'rxjs/operators';
import { Employee } from '../models/employee.model';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

 

  api = "https://raw.githubusercontent.com/dsubiram/Samples/master/employees.json";

  constructor(private httpClient:HttpClient) { }

  getAllEmployee(){
    return this.httpClient.get(this.api);
    
  }
    
  getEmployee(id) {
    return this.httpClient.get(this.api)
      .pipe(map((res) => {
        const data = res;
        const products: Employee[] = [];
               for(let key in data) {
                 let product: Employee = data[key];
                 
                 products.push(product);
                 
               }
               return products.filter(item=>item.id===id);
      }));
  }
    
  
  
}
