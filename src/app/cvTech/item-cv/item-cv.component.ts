import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { Personne } from 'src/app/Model/Personne';

@Component({
  selector: 'app-item-cv',
  templateUrl: './item-cv.component.html',
  styleUrls: ['./item-cv.component.css']
})
export class ItemCvComponent implements OnInit {
  @Input() personne: Personne = new Personne();
assets: any;
images: any;
  constructor() {}
  @Output() selectedPersonne = new EventEmitter();
  ngOnInit() {
    // Initialization logic here if needed
  }
  selectPersonne(){
    this.selectedPersonne.emit(
      this.personne
    );
  }
}


