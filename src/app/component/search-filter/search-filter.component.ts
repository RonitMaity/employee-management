import { Component, EventEmitter, OnInit, Output } from "@angular/core";
import { FormControl, FormsModule, ReactiveFormsModule } from "@angular/forms";

@Component({
  selector: "app-search-filter",
  standalone: true,
  imports: [FormsModule, ReactiveFormsModule],
  templateUrl: "./search-filter.component.html",
  styleUrl: "./search-filter.component.scss",
})
export class SearchFilterComponent implements OnInit {
  searchInput = new FormControl("");
  @Output() sendSearchInput = new EventEmitter<string | null>();

  ngOnInit(): void {
    this.searchInput.valueChanges.subscribe((keyEvent) => {
      this.sendSearchInput.emit(keyEvent);
    });
  }
}
