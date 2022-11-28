import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular-preparazione-verifica';
  articles = new Array<string>();
  addspam(testo : HTMLInputElement , numero : HTMLInputElement) : Boolean
  {
    let t : string = testo.value;
    let n: number = Number(numero.value);

    for(let i:number =0; i<n; i++){
    this.articles.push(t)
    }
    //console.log(this.articles)
    return false;

  }








}
