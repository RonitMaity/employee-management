import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { EmployeeDetailsComponent } from "./component/employee-details/employee-details.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, EmployeeDetailsComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'employee-management';
}
