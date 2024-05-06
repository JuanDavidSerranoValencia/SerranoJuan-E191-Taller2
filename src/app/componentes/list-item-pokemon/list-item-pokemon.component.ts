import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { InfiniteScrollCustomEvent } from '@ionic/angular';
import { PokemonService } from 'src/app/servicios/pokemon.service';

@Component({
  selector: 'app-list-item-pokemon',
  templateUrl: './list-item-pokemon.component.html',
  styleUrls: ['./list-item-pokemon.component.scss'],
})
export class ListItemPokemonComponent implements OnInit, OnChanges {

  @Input() pokemonBuscado:string = "";
  pokemones: any[] = [];
  pokemonesRender: any[] = [];

  constructor(public pokemonService: PokemonService) {
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['pokemonBuscado']) {
      const nuevoValor = changes['pokemonBuscado'].currentValue;
      const encontrados = this.getPokemonBuscado(nuevoValor);
      this.pokemonesRender = encontrados;
    }
  }

  ngOnInit() {
    this.getPokemones();
  }

  getPokemones(): void {
    this.pokemonService.getPokemones<any>().subscribe((data) => {
      this.pokemones.push(...data.results);
    });
  }

  getPokemonBuscado(value: string){
    if(value.trim() === ""){
      return this.pokemones;
    }
    const pokemonesCoincidentes = this.pokemones.filter(el => el.name.includes(value));
    return pokemonesCoincidentes;
  }

  onIonInfinite(ev: Event) {
    if (this.pokemonService.offset > 1300) {
      (ev as InfiniteScrollCustomEvent).target.disabled = true;
    } else {
      this.pokemonService.offset += 20;
      this.getPokemones();
      setTimeout(() => {
        (ev as InfiniteScrollCustomEvent).target.complete();
      }, 500);
    }
  }

}
