import { CanActivateFn } from '@angular/router';

export const authValidatorGuard: CanActivateFn = (route, state) => {
  if (!localStorage.getItem('token')) {
    window.location.href = '/auth/login';
    return false;
  }
  return true;
};
