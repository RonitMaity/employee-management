import { Component, OnInit } from "@angular/core";
import { RouterOutlet } from "@angular/router";
import { EmployeeDetailsComponent } from "./component/employee-details/employee-details.component";
import { EmployeeMockDataService } from "./services/employee-mock-data.service";

@Component({
  selector: "app-root",
  standalone: true,
  imports: [RouterOutlet, EmployeeDetailsComponent],
  providers: [EmployeeMockDataService],
  templateUrl: "./app.component.html",
  styleUrl: "./app.component.scss",
})
export class AppComponent implements OnInit {
  title = "employee-management";
  employeeDetails: any;

  constructor(private employeeMockDataService: EmployeeMockDataService) {}

  ngOnInit() {
    this.employeeMockDataService.employeeData.subscribe((employeeData) => {
      console.log(employeeData);
      this.employeeDetails = employeeData;
    });
  }
}
