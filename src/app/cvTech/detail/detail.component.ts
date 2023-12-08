import { Component, OnInit } from '@angular/core';
import { CvService } from '../services/cv.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Personne } from 'src/app/Model/Personne';
import { EmbaucheService } from '../services/embauche.service';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailledComponent implements OnInit{
  personne!: Personne;
  constructor(
    private cvService: CvService, 
    private activatedRouter: ActivatedRoute,
    private embaucheservService:EmbaucheService,
    private router: Router,
  ){}
  ngOnInit(){
    this.activatedRouter.params.subscribe(
      (params) => {
        console.log(params['id']);
       if (params['id']) {
          this.personne = this.cvService.getPersonneById(params['id']);
          console.log(this.cvService.getPersonneById(1));
        } else {
          console.error("ID is undefined");
        }
      }
    );
}
deletePersonne() {
  this.cvService.deletePersonne(this.personne.id);
  this.embaucheservService.debaucher(this.personne);
  const link = ['cv'];
  this.router.navigate(link);    
}
}
