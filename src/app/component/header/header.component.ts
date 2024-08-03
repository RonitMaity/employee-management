import { Component, EventEmitter, Output } from "@angular/core";
import { SearchFilterComponent } from "../search-filter/search-filter.component";
import { CommonModule } from "@angular/common";

@Component({
  selector: "app-header",
  standalone: true,
  imports: [SearchFilterComponent, CommonModule],
  templateUrl: "./header.component.html",
  styleUrl: "./header.component.scss",
})
export class HeaderComponent {
  @Output() sendSearchedKey = new EventEmitter<string | null>();

  activeComponent: string = "";

  showComponent(component: string) {
    this.activeComponent = component;
  }

  getSearchInput($event: string | null) {
    this.sendSearchedKey.emit($event);
  }
}
