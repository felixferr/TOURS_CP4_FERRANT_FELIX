import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PanierService {
  panier = [];
  constructor() { }

  add(id: string, horaire: string, personne: string) {
    this.panier.push(
      {
        id,
        horaire,
        personne,
      }
    );
  }
}
