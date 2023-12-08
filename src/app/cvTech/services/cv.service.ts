import { Injectable, OnInit } from '@angular/core';
import { Personne } from 'src/app/Model/Personne';

@Injectable({
  providedIn: 'root'
})
export class CvService  {
  private personnes: Personne [];
  constructor() { 
    this.personnes= [
      new Personne(1, 'Bacha', 'Nermine', 22, './assets/images/nermine.jpg', 123, 'developer'),
      new Personne(2, 'Mtiri', 'Wissem', 23, './assets/images/wissem.jpg', 1111, 'developer'),
      new Personne(3, 'Bouzid', 'Mohamed Aziz', 22, './assets/images/bouzid.jpg', 1111, 'developer'),
      new Personne(4, 'Ati', 'Khalil', 23, './assets/images/khalil.png', 1111, 'developer')
    ];
  }
  getPersonnes(): Personne []{
    return this.personnes;
  }
  getPersonneById(id: number): Personne  {
    return this.personnes.find(p => p.id == id) || new Personne(); // Utilisez "||" pour renvoyer une nouvelle Personne si aucune personne n'est trouvée.
}

deletePersonne(id: number): void {
  this.personnes = this.personnes.filter(p => p.id !== id);
}
}