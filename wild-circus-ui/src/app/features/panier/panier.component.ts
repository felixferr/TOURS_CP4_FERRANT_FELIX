import { Component, OnInit, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-panier',
  templateUrl: './panier.component.html',
  styleUrls: ['./panier.component.scss']
})
export class PanierComponent implements OnInit {
  panier: EventEmitter<boolean> = new EventEmitter();
  constructor() { }

  ngOnInit() {
  }

  onSelect(event){
    this.panier= event;
    console.log(event)
  }
}
