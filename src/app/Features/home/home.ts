import { Component } from '@angular/core';
import { Navbar } from '../navbar/navbar';
import { Menu } from '../menu/menu';
import { Particulas } from '../../shared/particulas-template/particulas';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-home',
  imports: [Navbar, Menu, RouterOutlet, Particulas],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home {}
