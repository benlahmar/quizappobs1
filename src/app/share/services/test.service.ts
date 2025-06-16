import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TestService {

  data="Hello every Body!";
  constructor() { }

  getData():string
  {
    return this.data;
  }
}
