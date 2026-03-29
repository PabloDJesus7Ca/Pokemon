import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';

export const authLoginGuard: CanActivateFn = () => {
  const router = inject(Router);
  const userName = localStorage.getItem('nombre');
  const userPaswword = localStorage.getItem('password');

  if (!userName && !userPaswword) {
    router.navigate(['/Login']);
    return false;
  }
  return true;
};
