import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthFormService {

  isAuthentificate=false;

  constructor(private route:Router) { }

  checkAuth()
  {
    localStorage.setItem("isauth",''+this.isAuthentificate);
      return this.isAuthentificate;
  }
  singIn(log:string, pass:string)
  {
    if(log==='admin' && pass==='admin')
     { 
      this.isAuthentificate=true;
      this.route.navigate(['/quiz/add/form'])
    }
  }
  signout()
  {
    this.isAuthentificate=false;
  }
}
