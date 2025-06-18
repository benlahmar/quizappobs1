import { CanActivateFn, Router } from '@angular/router';
import { AuthFormService } from './auth-form.service';
import { inject } from '@angular/core';

export const guardAuthGuard: CanActivateFn = (route, state) => {
  let r=inject(AuthFormService).checkAuth();
  if(r)
  {
    console.log('success')
    return true;
  }else{
    inject(Router).navigate(['/login'])
    console.log('echec')
    return false;
  }

  
};
