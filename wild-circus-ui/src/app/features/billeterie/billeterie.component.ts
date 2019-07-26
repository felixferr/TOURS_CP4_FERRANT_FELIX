import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { PanierService } from 'src/app/core/service/panier.service';

@Component({
  selector: 'app-billeterie',
  templateUrl: './billeterie.component.html',
  styleUrls: ['./billeterie.component.scss']
})
export class BilleterieComponent implements OnInit {
  toogledrop: EventEmitter<boolean> = new EventEmitter();
  constructor(private panier: PanierService, private activatedRoute: ActivatedRoute, private router: Router,) { }
  id: string;
  horaire: any;
  personne:any;
  ngOnInit() {
    this.activatedRoute.paramMap.subscribe((param: ParamMap) => {
      this.id = param.get('id');
    });
  }
  
  onSelect(event){
   this.toogledrop= event;
   console.log(event)
   
  }
  onClick(event){
    this.panier.add(this.id, this.horaire, this.personne);
    this.panier.add(this.id, this.horaire, this.personne);
    this.router.navigateByUrl("login");
  }
}
