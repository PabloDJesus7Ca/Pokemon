import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';

export const loginGuardGuard: CanActivateFn = () => {
  const router = inject(Router);

  if (localStorage.getItem('nombre') && localStorage.getItem('password')) {
    router.navigate(['/Home']);
    return false;
  }
  return true;
};
