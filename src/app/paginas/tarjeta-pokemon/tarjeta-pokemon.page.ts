import { Component, Input, OnInit } from '@angular/core';
import { PokemonService } from 'src/app/servicios/pokemon.service';

@Component({
  selector: 'app-tarjeta-pokemon',
  templateUrl: './tarjeta-pokemon.page.html',
  styleUrls: ['./tarjeta-pokemon.page.scss'],
})
export class TarjetaPokemonPage implements OnInit {

  @Input() idPokemon!:string; 
  pokemon:any;

  constructor(public pokemonService: PokemonService) {
  }

  ngOnInit() {
    this.getPokemon();
  }

  getPokemon(): void {
    this.pokemonService.getPokemon<any>(this.idPokemon).subscribe((data) => {
      this.pokemon = data;
    });
  }

  capitalize(cad: string){
    return cad.charAt(0).toUpperCase() + cad.slice(1, cad.length);
  }

}
