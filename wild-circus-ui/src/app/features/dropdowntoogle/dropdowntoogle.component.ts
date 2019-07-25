import { Component, OnInit, Output, EventEmitter, Input } from "@angular/core";

@Component({
  selector: "app-dropdowntoogle",
  templateUrl: "./dropdowntoogle.component.html",
  styleUrls: ["./dropdowntoogle.component.scss"]
})
export class DropdowntoogleComponent implements OnInit {
  selectedValue: string = "";
  @Output()
  public select: EventEmitter<string> = new EventEmitter();
  constructor() {}

  ngOnInit() {}

  changeDropdownName(value: string) {
    this.selectedValue = value;
    this.select.emit(value);
  }
}
