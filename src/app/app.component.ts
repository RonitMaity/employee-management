import { Component, OnInit } from "@angular/core";
import { RouterOutlet } from "@angular/router";
import { EmployeeDetailsComponent } from "./component/employee-details/employee-details.component";
import { EmployeeMockDataService } from "./services/employee-mock-data.service";
import { HeaderComponent } from "./component/header/header.component";

@Component({
  selector: "app-root",
  standalone: true,
  imports: [RouterOutlet, EmployeeDetailsComponent, HeaderComponent],
  providers: [EmployeeMockDataService],
  templateUrl: "./app.component.html",
  styleUrl: "./app.component.scss",
})
export class AppComponent implements OnInit {
  title = "employee-management";
  employeeDetails: any;
  employeeDetailsModifiled: any;

  constructor(private employeeMockDataService: EmployeeMockDataService) {}

  ngOnInit() {
    this.employeeMockDataService.employeeData.subscribe((employeeData) => {
      this.employeeDetails = employeeData;
      this.employeeDetailsModifiled = {
        ...employeeData,
        users: [...employeeData.users],
      };
    });
  }

  getSearchKey(searchTerm: string | null) {
    if (searchTerm === null || searchTerm.trim() === "") {
      this.employeeDetailsModifiled.users = [...this.employeeDetails.users];
    } else {
      const lowerCaseSearchTerm = searchTerm.toLowerCase();
      this.employeeDetailsModifiled.users = this.employeeDetails.users.filter(
        (employee: any) => {
          return employee.firstName.toLowerCase().includes(lowerCaseSearchTerm);
        }
      );
    }
  }
}
