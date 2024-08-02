import { Component, Input } from "@angular/core";

@Component({
  selector: "app-employee-details",
  standalone: true,
  imports: [],
  templateUrl: "./employee-details.component.html",
  styleUrl: "./employee-details.component.scss",
})
export class EmployeeDetailsComponent {
  @Input() employeeDetails: any;
}
