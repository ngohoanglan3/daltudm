import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';

export const routeGuard: CanActivateFn = (route, state) => {
  const router = inject(Router);

  const localData = localStorage.getItem('accessToken');
  if(localData == null) {
    router.navigateByUrl("/login");
    return false;
  }
  else {
    return true;
  }
};
