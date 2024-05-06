import { Component, Input, OnInit } from '@angular/core';
import { TarjetaPokemonPage } from 'src/app/paginas/tarjeta-pokemon/tarjeta-pokemon.page';
import { PokemonService } from 'src/app/servicios/pokemon.service';


@Component({
  selector: 'app-item-pokemon',
  templateUrl: './item-pokemon.component.html',
  styleUrls: ['./item-pokemon.component.scss'],
})
export class ItemPokemonComponent implements OnInit {

  @Input() pokemon!: any;
  sprite: string = "";
  pageTarjetaPokemon = TarjetaPokemonPage;

  constructor(public pokemonService: PokemonService) {
  }

  ngOnInit() {
    this.getSprite();
  }

  getSprite(){
    this.pokemonService.getPokemon<any>(this.getId(this.pokemon.url)).subscribe((data) => {
      this.sprite = data.sprites.front_default ? data.sprites.front_default : "https://ionicframework.com/docs/img/demos/thumbnail.svg";
    });
  }

  getId(cad: string) {
    const cadSliced = cad.split("/");
    return cadSliced[6];
  }

  capitalize(cad: string){
    return cad.charAt(0).toUpperCase() + cad.slice(1, cad.length);
  }

}
