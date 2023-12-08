import { Injectable } from '@angular/core';
import {Personne} from '../../Model/Personne';
import { ToastrService } from 'ngx-toastr';


@Injectable({
  providedIn: 'root'
})
export class EmbaucheService {
  personnes: Personne [];
  constructor(private toastr: ToastrService) {
    this.personnes = [];
  }
  getEmbauchees() : Personne[]{
    return this.personnes;
  }
  embaucher(personne: Personne):void {
    const index = this.personnes.indexOf(personne);
    if (index < 0) {
      this.personnes.push(personne);
      this.toastr.success(`${personne.name} a été embauché`, 'embauche');
      //alert(`${personne.firstname} ${personne.name} a été embauché `);


    } else {
      //alert(`${personne.firstname} ${personne.name} a été déjà embauché `);
      this.toastr.error(`${personne.name} est déja embauché`, "Error d'embauche!");
    }
  }
  debaucher(personne: Personne):void {
    const index = this.personnes.indexOf(personne);
    if (index >= 0) {
      this.personnes.splice(index,1);
      alert(`${personne.firstname} ${personne.name}  a été supprimé avec succés `);
    } else {
      alert(`${personne.firstname} ${personne.name}  n'existe pas `);
    }
  }
}