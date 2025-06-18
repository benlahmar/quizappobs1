import { Component, Input } from '@angular/core';
import { QuizConfig } from '../../../core/models/quiz-config';
import { FormsModule } from '@angular/forms';
import { TabDirective } from '../../../share/directives/tab.directive';
import { Store } from '@ngrx/store';
import { AppState } from '../../../core/state/appstate';
import { selectorallowreviewvalue, selectorallowreviewvalue2, selectorcountervalue } from '../../../core/state/selector';
import { allowreview, allowreview2 } from '../../../core/state/actions';

@Component({
  selector: 'app-quiz-config',
  imports: [FormsModule, TabDirective],
  templateUrl: './quiz-config.component.html',
  styleUrl: './quiz-config.component.css'
})
export class QuizConfigComponent {

  allowr:boolean
  cc:QuizConfig;
  @Input()
  dataconfig:QuizConfig;

  constructor(private store:Store<{counter:AppState}>){
    store.select(selectorallowreviewvalue).subscribe(x=>{
    this.allowr=x;
      });
      store.select(selectorallowreviewvalue2).subscribe(x=>{
    this.cc=x;
    console.log(this.cc)
      })
  }

  test()
  {
    console.log(this.dataconfig)
    this.store.dispatch(()=>allowreview2)
    //console.log(this.cc)
  }
}
