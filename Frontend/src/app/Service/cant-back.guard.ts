import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';


export const cantBackGuard: CanActivateFn = (route, state) => {
  const router = inject(Router);

  const localData = sessionStorage.getItem('accessToken');
  debugger;
  if(localData != null) {
    if(sessionStorage.getItem('role') == '1') {
      router.navigateByUrl("/student");
    }
    else if(sessionStorage.getItem('role') == '2') {
      router.navigateByUrl("/teacher");
    }
    return false;
  }
  else {
    return true;
  }
};
