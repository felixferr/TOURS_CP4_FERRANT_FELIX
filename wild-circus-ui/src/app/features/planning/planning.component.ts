import { Component, OnInit } from '@angular/core';
import { PlanningService } from 'src/app/core/service/planning.service';
import { Planning } from 'src/app/core/model/planning.model';

@Component({
  selector: 'app-planning',
  templateUrl: './planning.component.html',
  styleUrls: ['./planning.component.scss']
})
export class PlanningComponent implements OnInit {

  constructor(private planningService: PlanningService) { }

  public planning: Planning;
  public plannings;
  ngOnInit() {
    this.planningService.getPlannings().subscribe((plannings: Planning) => {
      this.plannings = plannings;
    })
  }

}
