import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.page.html',
  styleUrls: ['./inicio.page.scss'],
})
export class InicioPage implements OnInit {

  pokemon:string = "";

  constructor() { }

  ngOnInit() {
  }

  pokemonBuscar($event: string) {
    this.pokemon = $event;
  }

}
