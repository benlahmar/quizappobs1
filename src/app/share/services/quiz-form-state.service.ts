import { Injectable } from '@angular/core';
import { QuizFormState } from '../../core/models/FormStat';

@Injectable({
  providedIn: 'root'
})
export class QuizFormStateService {

  //state={'o':false,'q':false,'qz':false}
  state:QuizFormState;
  constructor() { 
    this.state = {so:false, sq:false, sqz:false}
  }

  change(e:boolean,o:string)
  {
    switch (o) {
      case 'o':
        this.state.so=e;
        break;
        case 'q':
        this.state.sq=e;
        break;
         case 'qz':
        this.state.sqz=e;
        break;
    
      default:
        break;
    }
    
  }
}
