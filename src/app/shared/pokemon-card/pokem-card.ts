import { Component, Input } from '@angular/core';
import { NgOptimizedImage } from '@angular/common';
import { PokemonOnly } from '../../Models/pokemon-only';

@Component({
  selector: 'app-pokem-card',
  imports: [NgOptimizedImage],
  templateUrl: './pokem-card.html',
  styleUrl: './pokem-card.css',
})
export class PokemCard {
  @Input() Pokemon!: PokemonOnly;
}
