import { Component } from '@angular/core';

@Component({
  selector: 'app-color',
  templateUrl: './color.component.html',
  styleUrls: ['./color.component.css']
})
export class ColorComponent {
  color='red';
  changeColor(inputColor:string){
    console.log(inputColor);
    this.color=inputColor;
  }
}
