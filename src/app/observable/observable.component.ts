import { Component } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-observable',
  templateUrl: './observable.component.html',
  styleUrls: ['./observable.component.css']
})
export class ObservableComponent {
  monObservable?: Observable<string>;
  images=[
    'nermine.jpg',
    'bouzid.jpg',
    'wissem.jpg',
    'khalil.png'
  ];
  currImage?: string;
  constructor(){

  }
  ngOnInit(): void {
    this.monObservable = new Observable((observer) => {
      let i = this.images.length - 1;
      setInterval(() => {
        observer.next(this.images[i]);
        if (i > 0) {
          i--;
        } else {
          i = this.images.length - 1;
        }
      }, 1500);
    });
    this.monObservable.subscribe((result) => {
      this.currImage = result;
    });
  }
}
