import { Component, OnInit, EventEmitter } from '@angular/core';
import { PanierService } from 'src/app/core/service/panier.service';

@Component({
  selector: 'app-panier',
  templateUrl: './panier.component.html',
  styleUrls: ['./panier.component.scss']
})
export class PanierComponent implements OnInit {
  panier: EventEmitter<boolean> = new EventEmitter();

  constructor(public panierService: PanierService) { }

  ngOnInit() {
  }

  onSelect(event){
    this.panier= event;
    console.log(event)
  }
}
