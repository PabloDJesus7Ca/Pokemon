import { Component } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-configuration',
  imports: [],
  templateUrl: './configuration.html',
  styleUrl: './configuration.css',
})
export class Configuration {
  constructor(private router: Router) {}
  menuAbierto = false;
  toggleMenu() {
    this.menuAbierto = !this.menuAbierto;
  }

  logout() {
    localStorage.removeItem('nombre');
    localStorage.removeItem('password');
    this.router.navigate(['/Login']);
  }
}
