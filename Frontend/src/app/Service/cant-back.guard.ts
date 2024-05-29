import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';


export const cantBackGuard: CanActivateFn = (route, state) => {
  const router = inject(Router);

  const localData = localStorage.getItem('accessToken');
  debugger;
  if(localData != null) {
    if(localStorage.getItem('role') == '1') {
      router.navigateByUrl("/student");
    }
    else if(localStorage.getItem('role') == '2') {
      router.navigateByUrl("/teacher");
    }
    return false;
  }
  else {
    return true;
  }
};
