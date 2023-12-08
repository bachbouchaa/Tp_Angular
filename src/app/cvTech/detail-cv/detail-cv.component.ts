import {Component, Input, OnInit} from '@angular/core';
import {Personne} from '../../Model/Personne';
import {EmbaucheService} from '../services/embauche.service';
import { Router } from '@angular/router';

@Component({
  selector: 'detail-cv',
  templateUrl: './detail-cv.component.html',
  styleUrls: ['./detail-cv.component.css']
})
export class DetailComponent implements OnInit {

  @Input() personne!: Personne;
  constructor(private embaucheService: EmbaucheService, 
    private router: Router ) { }

  ngOnInit() {
  }
  embaucher() {
    this.embaucheService.embaucher(this.personne);
  }
  moreInfo() {
    const link=['cv', this.personne.id];
    this.router.navigate(link);
  }
}