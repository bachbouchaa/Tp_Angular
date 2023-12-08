import { Component, OnInit } from '@angular/core';
import { Personne } from 'src/app/Model/Personne';
import { CvService } from '../services/cv.service';

@Component({
  selector: 'app-cv',
  templateUrl: './cv.component.html',
  styleUrls: ['./cv.component.css']
})
export class CvComponent implements OnInit {
  personnes: Personne[] = [];
  selectedPersonne!: Personne; // Initialize as undefined or assign a default value

  constructor(private cvService: CvService) {}

  ngOnInit() {
    this.personnes=this.cvService.getPersonnes();
  }

  onSelectedPersonne(personne: Personne) {
    this.selectedPersonne = personne;
  }
}
