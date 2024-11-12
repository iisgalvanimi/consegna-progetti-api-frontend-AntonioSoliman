import { Component } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { animals, Emoji, fruits } from '../models/emoji.model';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  genVect : Emoji[]= [{name:"", emoji:""}];
  //Riceve l'oggetto ActivatedRoute come dependency injection
  constructor(private route: ActivatedRoute) {
    //Gestisce i cambi di route con l'observable paramMap
    this.route.paramMap.subscribe(this.getRouterParam);
  }
 
  //Ogni volta che viene invocata la route tracks/:id, l'observable paramMap richiama questo metodo
  getRouterParam = (params: ParamMap) =>
  {
    let uri_param = params.get('id'); //Ottengo l'id dalla ParamMap
    console.log (uri_param); //Stampo su console
    //this.service.getTrack()
    if (uri_param == 'fruits') this.genVect = fruits;
    if (uri_param == 'animals') this.genVect = animals;
  }

}
