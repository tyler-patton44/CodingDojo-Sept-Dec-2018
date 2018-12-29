import { Component } from '@angular/core';
import { HttpService } from './http.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'public';
  pokemon = "";
  image = "";
  abilities = [];
  constructor(private _httpService: HttpService){}

  getTheData(event: any){
    this.abilities = [];
    var x = event.target.value;
    let observe = this._httpService.getPoki(x);

    observe.subscribe(data => {
      this.pokemon=data['name'];
      this.image=data['sprites']['front_shiny'];

      for(var a=0; a<data['abilities'].length; a++){
        this.abilities.push(data['abilities'][a].ability['name']);
      }
    })
    
  }
}
