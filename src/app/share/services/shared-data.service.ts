import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SharedDataService {

  message= new BehaviorSubject('hello');
  

  message$ = this.message.asObservable();
  constructor() { }

  getcurrentMessage()
  {
    return this.message.getValue();
  }

  updateMessage(newm:string)
  {
      this.message.next(newm);
  }
}
