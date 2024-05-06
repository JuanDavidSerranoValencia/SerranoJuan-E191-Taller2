import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PokemonService {
  private url: string = "https://pokeapi.co/api/v2/pokemon/";
  public offset: number = 0;
  public limit: number = 20;

  constructor(public _http: HttpClient) {
  }

  getPokemones<T>() {
    const fullpath: string = `${this.url}?offset=${this.offset}&limit=${this.limit}`;
    return this._http.get<T>(fullpath);
  }

  getPokemon<T>(id: string) {
    const fullpath: string = `${this.url}${id}`;
    return this._http.get<T>(fullpath);
  }
}
