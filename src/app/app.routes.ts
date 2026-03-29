import { Routes } from '@angular/router';
import { authLoginGuard } from './core/Guards/auth-login-guard';
import { loginGuardGuard } from './core/Guards/login-guard-guard';
export const routes: Routes = [
  {
    path: 'Login',
    canActivate: [loginGuardGuard],
    loadComponent: () => import('./Features/login/login').then((r) => r.Login),
  },
  {
    path: 'Home',
    canActivate: [authLoginGuard],
    loadComponent: () => import('./Features/home/home').then((r) => r.Home),
    children: [
      {
        path: 'Aleatorio',
        loadComponent: () => import('./Features/random/random').then((r) => r.Random),
      },
      { path: 'Tipo', loadComponent: () => import('./Features/kind/kind').then((r) => r.Kind) },
      {
        path: 'Busqueda',
        loadComponent: () => import('./Features/searching/searching').then((r) => r.Searching),
      },
      {
        path: '',
        redirectTo: 'Aleatorio',
        pathMatch: 'full',
      },
    ],
  },

  {
    path: '',
    redirectTo: 'Login',
    pathMatch: 'full',
  },
  {
    path: '**',
    loadComponent: () => import('./shared/page-no-found/page-no-found').then((r) => r.PageNoFound),
  },
];
