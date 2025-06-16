import { Pipe, PipeTransform } from '@angular/core';
import { Quiz } from '../../core/models/quiz';
import { Question } from '../../core/models/question';

@Pipe({
  name: 'quiz'
})
export class QuizPipe implements PipeTransform {

  transform(value: Quiz, ...args: unknown[]): Question[] | null{
    
     let qs:any;
    switch (args[0]) {
      case 'all':
        qs=value.questions;
          break;
      case 'select': 
        qs=value.questions.filter((q: Question) => !q.isnotselected());
        if(args.length>1)
        {
          if(args[1]=='not')
          {
            qs=value.questions.filter((q: Question) => q.isnotselected());
          }
        }
        break;
      case 'correct':
        qs=value.questions.filter((q: Question) => q.isCorrect());
        if(args.length>1)
        {
          if(args[1]=='not')
          {
            qs=value.questions.filter((q: Question) => !q.isCorrect());
          }
        }
    }
     

    
    return qs;
  }

}
