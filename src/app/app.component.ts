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
  accordionPanels = [
    { title: "Panel 1", content: "Content for panel 1" },
    { title: "Panel 2", content: "Content for panel 2" },
    { title: "Panel 3", content: "Content for panel 3" },
  ];

  constructor(private employeeMockDataService: EmployeeMockDataService) {}

  ngOnInit() {
    this.employeeMockDataService.employeeData.subscribe((employeeData) => {
      console.log(employeeData);
      this.employeeDetails = employeeData;
    });
  }

  getSearchKey($event: string | null) {
    this.employeeDetails.users = this.employeeDetails.users.filter(
      (employee: any) => {
        return employee.firstName.includes($event);
      }
    );
  }
}
