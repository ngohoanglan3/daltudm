import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';

export const teacherGuard: CanActivateFn = (route, state) => {
  const router = inject(Router);

  const localData = sessionStorage.getItem('accessToken');
  if (localData != null) {
    if (sessionStorage.getItem('role') == '2') {
      return true;
    } else {
      router.navigate(['/login']);
      return false;
    }
  } else {
    router.navigate(['/login']);
    return false;
  }
};
