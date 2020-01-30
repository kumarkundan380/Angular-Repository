import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  constructor() { }

  getEmployees(){
    return [
      {"id":1,"name":"Kundan","age":25},
      {"id":2,"name":"Rajendra","age":24},
      {"id":3,"name":"Praveen","age":23},
      {"id":4,"name":"Bhushan","age":26} 
    ];
  }
}
