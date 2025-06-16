import { Component, Input } from '@angular/core';
import { Question } from '../../../core/models/question';
import { OptionComponent } from "../option/option.component";

@Component({
  selector: 'app-question',
  imports: [OptionComponent],
  templateUrl: './question.component.html',
  styleUrl: './question.component.css'
})
export class QuestionComponent {

  @Input()
  qdata:Question;
 @Input()
  mode:string;

  cls()
  {
    if(this.mode=='review')
    {
      if(this.qdata.isnotselected())
      {
        return 'alert alert-danger'
      }else
      {
        return 'alert alert-success'
      }
    }else
    return 'abc'
  }
}
