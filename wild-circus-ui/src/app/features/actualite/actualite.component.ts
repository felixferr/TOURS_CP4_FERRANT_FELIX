import { Component, OnInit } from '@angular/core';
import { ActualiteService } from 'src/app/core/service/actualite.service';
import { Actualite } from 'src/app/core/model/actualite.model';

@Component({
  selector: 'app-actualite',
  templateUrl: './actualite.component.html',
  styleUrls: ['./actualite.component.scss']
})
export class ActualiteComponent implements OnInit {


  public actualites;


  constructor(private actualiteService: ActualiteService) { }

  ngOnInit() {
    this.actualiteService.getActus().subscribe((actualites: Actualite) => {
      this.actualites = actualites;
      console.log(this.actualites)
    })
  }


}
