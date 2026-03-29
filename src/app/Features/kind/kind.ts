import { Component, ChangeDetectorRef } from '@angular/core';
import { NgOptimizedImage } from '@angular/common';
import { PokemonService } from '../../core/Services/pokemon-service';
import { PokemonOnly } from '../../Models/pokemon-only';
import { Estados } from '../../Models/pokemon-estados';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-kind',
  imports: [NgOptimizedImage],
  templateUrl: './kind.html',
  styleUrl: './kind.css',
})
export class Kind {
  Estados = Estados;
  pokemons: PokemonOnly[] = [];
  skeletons = Array(20);

  constructor(
    private pokemonservice: PokemonService,
    private cdr: ChangeDetectorRef,
    private http: HttpClient,
  ) {}

  estado: Estados = Estados.Vacio;

  fire() {
    this.estado = Estados.Cargando;
    this.pokemons = [];
    this.skeletons = Array(20);
    this.pokemonservice.getPokemonByType('fire').subscribe((data: any) => {
      const lista = data.pokemon.slice(0, 20);
      lista.forEach((item: any) => {
        this.http.get<PokemonOnly>(item.pokemon.url).subscribe((poke) => {
          this.pokemons.push(poke);
          if (this.pokemons.length === lista.length) {
            setTimeout(() => {
              this.estado = Estados.Listo;
              this.cdr.detectChanges();
            }, 1300);
          }
        });
      });
    });
  }

  water() {
    this.estado = Estados.Cargando;
    this.pokemons = [];
    this.skeletons = Array(20);
    this.pokemonservice.getPokemonByType('water').subscribe((data: any) => {
      const lista = data.pokemon.slice(0, 20);
      lista.forEach((item: any) => {
        this.http.get<PokemonOnly>(item.pokemon.url).subscribe((poke) => {
          this.pokemons.push(poke);
          if (this.pokemons.length === lista.length) {
            setTimeout(() => {
              this.estado = Estados.Listo;
              this.cdr.detectChanges();
            }, 1300);
          }
        });
      });
    });
  }

  psychic() {
    this.estado = Estados.Cargando;
    this.pokemons = [];
    this.skeletons = Array(20);
    this.pokemonservice.getPokemonByType('psychic').subscribe((data: any) => {
      const lista = data.pokemon.slice(0, 20);
      lista.forEach((item: any) => {
        this.http.get<PokemonOnly>(item.pokemon.url).subscribe((poke) => {
          this.pokemons.push(poke);
          if (this.pokemons.length === lista.length) {
            setTimeout(() => {
              this.estado = Estados.Listo;
              this.cdr.detectChanges();
            }, 1300);
          }
        });
      });
    });
  }

  rock() {
    this.estado = Estados.Cargando;
    this.pokemons = [];
    this.skeletons = Array(20);
    this.pokemonservice.getPokemonByType('rock').subscribe((data: any) => {
      const lista = data.pokemon.slice(0, 20);
      lista.forEach((item: any) => {
        this.http.get<PokemonOnly>(item.pokemon.url).subscribe((poke) => {
          this.pokemons.push(poke);
          if (this.pokemons.length === lista.length) {
            setTimeout(() => {
              this.estado = Estados.Listo;
              this.cdr.detectChanges();
            }, 1300);
          }
        });
      });
    });
  }

  grass() {
    this.estado = Estados.Cargando;
    this.pokemons = [];
    this.skeletons = Array(20);
    this.pokemonservice.getPokemonByType('grass').subscribe((data: any) => {
      const lista = data.pokemon.slice(0, 20);
      lista.forEach((item: any) => {
        this.http.get<PokemonOnly>(item.pokemon.url).subscribe((poke) => {
          this.pokemons.push(poke);
          if (this.pokemons.length === lista.length) {
            setTimeout(() => {
              this.estado = Estados.Listo;
              this.cdr.detectChanges();
            }, 1300);
          }
        });
      });
    });
  }

  electric() {
    this.estado = Estados.Cargando;
    this.pokemons = [];
    this.skeletons = Array(20);
    this.pokemonservice.getPokemonByType('electric').subscribe((data: any) => {
      const lista = data.pokemon.slice(0, 20);
      lista.forEach((item: any) => {
        this.http.get<PokemonOnly>(item.pokemon.url).subscribe((poke) => {
          this.pokemons.push(poke);
          if (this.pokemons.length === lista.length) {
            setTimeout(() => {
              this.estado = Estados.Listo;
              this.cdr.detectChanges();
            }, 1300);
          }
        });
      });
    });
  }
}
