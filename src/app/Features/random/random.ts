import { Component, ChangeDetectorRef } from '@angular/core';
import { PokemCard } from '../../shared/pokemon-card/pokem-card';
import { PokemonService } from '../../core/Services/pokemon-service';
import { PokemonOnly } from '../../Models/pokemon-only';
import { Estados } from '../../Models/pokemon-estados';
import { Skeleton } from '../../shared/skeleton-random/skeleton';
@Component({
  selector: 'app-random',
  imports: [PokemCard, Skeleton],
  templateUrl: './random.html',
  styleUrl: './random.css',
})
export class Random {
  Estados = Estados;
  pokemon!: PokemonOnly;

  constructor(
    private pokemonService: PokemonService,
    private cdr: ChangeDetectorRef,
  ) {}

  estados: Estados = Estados.Vacio;
  descubrir() {
    this.estados = Estados.Cargando;
    this.pokemonService.getPokemon().subscribe((data) => {
      this.pokemon = data;
      setTimeout(() => {
        this.estados = Estados.Listo;
        this.cdr.detectChanges();
      }, 1300);
    });
  }
}
