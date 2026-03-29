import { Component, signal } from '@angular/core';
import { Login } from './Features/login/login';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [Login, RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  protected readonly title = signal('Pokemon');
}
