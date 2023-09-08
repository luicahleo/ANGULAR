import { Component } from '@angular/core';
import { Employee } from './models/employee';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular-simple-crud';

  employeeArray: Employee[] = [
    {id: 1, name: "Ryan", country: "USA"},
    {id: 2, name: "Angelica", country: "USA"},
    {id: 3, name: "Jorge", country: "Mexico"}
  ]

  selectedEmployee: Employee = new Employee();

}
