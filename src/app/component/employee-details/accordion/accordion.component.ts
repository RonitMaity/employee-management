import { CommonModule } from "@angular/common";
import { Component, Input, Output, EventEmitter } from "@angular/core";

@Component({
  selector: "app-accordion",
  templateUrl: "./accordion.component.html",
  styleUrls: ["./accordion.component.scss"],
  standalone: true,
  imports: [CommonModule],
})
export class AccordionComponent {
  @Input() panels: { title: string; content: string }[] = [];
  @Output() panelChange = new EventEmitter<number | null>();
  openIndex: number | null = null;

  togglePanel(index: number): void {
    this.openIndex = this.openIndex === index ? null : index;
    this.panelChange.emit(this.openIndex);
  }

  isOpen(index: number): boolean {
    return this.openIndex === index;
  }
}
