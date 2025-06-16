import { Component } from '@angular/core';
import { quizdata } from '../../../core/data1';
import { Quiz } from '../../../core/models/quiz';
import { FormsModule } from '@angular/forms';
import { Option } from '../../../core/models/option';

@Component({
  selector: 'app-quiz1',
  imports: [FormsModule],
  templateUrl: './quiz1.component.html',
  styleUrl: './quiz1.component.css'
})
export class Quiz1Component {
  data:Quiz=new Quiz(quizdata);
  curentquestion:number=0;
  mode:string='quiz';

  goTo(x:any)
  {
    console.log(this.data)
    this.curentquestion=x;
  }

  changemode(x:string)
  {
    this.mode=x;
  }

  choose(o:Option)
  {
    console.log(o)
  }

  
  
}
