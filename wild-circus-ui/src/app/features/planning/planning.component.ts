import { Component, OnInit, Output, EventEmitter } from "@angular/core";
import { PlanningService } from "src/app/core/service/planning.service";
import { Planning } from "src/app/core/model/planning.model";

@Component({
  selector: "app-planning",
  templateUrl: "./planning.component.html",
  styleUrls: ["./planning.component.scss"]
})
export class PlanningComponent implements OnInit {
  constructor(private planningService: PlanningService) {}
  @Output()
  public select: EventEmitter<string> = new EventEmitter();

  public planning: Planning[] = [];
  public plannings;
  public mondays = [];
  public tuesdays = [];
  ngOnInit() {
    this.planningService.getPlannings().subscribe((planning: Planning) => {
      this.plannings = planning;
      console.log(planning);

      this.mondays = this.plannings.filter((plannings) => {
        return plannings.jours === "Lundi";
      });
      this.tuesdays = this.plannings.filter((plannings) => {
        return plannings.jours === "Mardi";
      });
      console.log(this.mondays);
    });
  }

  
}
