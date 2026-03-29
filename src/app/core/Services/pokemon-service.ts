import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { PokemonOnly } from '../../Models/pokemon-only';

@Injectable({
  providedIn: 'root',
})
export class PokemonService {
  constructor(private htttp: HttpClient) {}

  getPokemon(): Observable<PokemonOnly> {
    const randomId = Math.floor(Math.random() * 151) + 1;
    return this.htttp.get<PokemonOnly>(`https://pokeapi.co/api/v2/pokemon/${randomId}`);
  }

  getPokemonByType(type: string): Observable<PokemonOnly> {
    return this.htttp.get<PokemonOnly>(`https://pokeapi.co/api/v2/type/${type}`);
  }

  getPokemonByName(name: string): Observable<PokemonOnly> {
    return this.htttp.get<PokemonOnly>(`https://pokeapi.co/api/v2/pokemon/${name}`);
  }
}
