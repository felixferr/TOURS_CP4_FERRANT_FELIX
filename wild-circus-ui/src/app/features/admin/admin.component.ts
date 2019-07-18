import { Component, OnInit } from "@angular/core";
import { ActualiteService } from "src/app/core/service/actualite.service";
import { Actualite } from "src/app/core/model/actualite.model";
import { PlanningService } from 'src/app/core/service/planning.service';
import { Planning } from 'src/app/core/model/planning.model';
import { BilleterieService } from 'src/app/core/service/billeterie.service';
import { Billeterie } from 'src/app/core/model/billleterie.model';

@Component({
  selector: "app-admin",
  templateUrl: "./admin.component.html",
  styleUrls: ["./admin.component.scss"]
})
export class AdminComponent implements OnInit {
  constructor(private actualiteService: ActualiteService, private planningService: PlanningService, private billeterieService: BilleterieService) {}

  public actualite: Actualite;
  public actualites;
  public planning: Planning;
  public plannings;
  public billeterie: Billeterie;
  public billeteries;
  
  ngOnInit() {
    this.actualiteService.getActus().subscribe((actualites: Actualite) => {
      this.actualites = actualites;
    });
    this.planningService.getPlannings().subscribe((plannings: Planning) => {
      this.plannings = plannings;
    });
    this.billeterieService.getBilleterie().subscribe((billeteries: Billeterie) => {
      this.billeteries = billeteries;
    });
  }

  createActu(actualite) {
    this.actualiteService.createActu(actualite.value).subscribe(actualite => {
      if (actualite) {
        alert("La nouvelle actualité a bien été enregistrée");
      }
    });
  }

  deleteActu(id, index) {
    if (confirm("Voulez vous vraiment supprimer ?")) {
      this.actualiteService.deleteActu(id).subscribe(() => {});
      this.actualites.splice(index, 1);
      alert("Actualité supprimée.");
    } else {
    }
  }

  createPlanning(planning) {
    this.planningService.createPlanning(planning.value).subscribe(planning => {
      if (planning) {
        alert("La nouvelle date a bien été enregistrée");
      }
    });
  }

  deletePlanning(id, index) {
    if (confirm("Voulez vous vraiment supprimer ?")) {
      this.planningService.deletePlanning(id).subscribe(() => {});
      this.plannings.splice(index, 1);
      alert("Date de planning supprimée.");
    } else {
    }
  }
 
  
}


