import { Component } from '@angular/core';
import { Configuration } from '../configuration/configuration';

@Component({
  selector: 'app-navbar',
  imports: [Configuration],
  templateUrl: './navbar.html',
  styleUrl: './navbar.css',
})
export class Navbar {}
