import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-visualizza',
  templateUrl: './visualizza.component.html',
  styleUrls: ['./visualizza.component.css']
})
export class VisualizzaComponent {
  @Input() name : string = ""
  constructor(){
    
  }

}
