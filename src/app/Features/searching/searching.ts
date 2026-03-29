import { ChangeDetectorRef, Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { PokemonService } from '../../core/Services/pokemon-service';
import { PokemonOnly } from '../../Models/pokemon-only';
import { Estados } from '../../Models/pokemon-estados';
import { PokemCard } from '../../shared/pokemon-card/pokem-card';
import { SkeletonSearching } from '../../shared/skeleton-searching/skeleton-searching';

@Component({
  selector: 'app-searching',
  imports: [ReactiveFormsModule, PokemCard, SkeletonSearching],
  templateUrl: './searching.html',
  styleUrl: './searching.css',
})
export class Searching {
  Estados = Estados;
  Pokemon!: PokemonOnly;
  form!: FormGroup;
  constructor(
    private pokemonService: PokemonService,
    private cd: ChangeDetectorRef,
    private fb: FormBuilder,
  ) {
    this.form = this.fb.group({
      query: ['', [Validators.required]],
    });
  }
  estados: Estados = Estados.Vacio;
  submit() {
    if (this.form.invalid) return;
    this.estados = Estados.Cargando;
    this.pokemonService.getPokemonByName(this.form.value.query).subscribe({
      next: (data) => {
        this.Pokemon = data;
        setTimeout(() => {
          this.estados = Estados.Listo;
          this.cd.detectChanges();
        }, 1300);
      },
      error: () => {
        setTimeout(() => {
          this.estados = Estados.NoEncontrado;
          this.cd.detectChanges();
        }, 1300);
      },
    });
  }
}
