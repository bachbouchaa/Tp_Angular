import { Injectable } from '@angular/core';
import {Personne} from '../../Model/Personne';

@Injectable({
  providedIn: 'root'
})
export class EmbaucheService {
  personnes: Personne [];
  constructor() {
    this.personnes = [];
  }
  getEmbauchees() : Personne[]{
    return this.personnes;
  }
  embaucher(personne: Personne):void {
    const index = this.personnes.indexOf(personne);
    if (index < 0) {
      this.personnes.push(personne);
    } else {
      alert(`${personne.firstname} ${personne.name} a été déjà embauché `);
    }
  }
  debaucher(personne: Personne):void {
    const index = this.personnes.indexOf(personne);
    if (index >= 0) {
      this.personnes.splice(index,1);
    } else {
      alert(`${personne.firstname} ${personne.name} n'existe pas dans la liste des embauchés `);
    }
  }
}