import { Component, Input } from '@angular/core';
import { QuizConfig } from '../../../core/models/quiz-config';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-quiz-config',
  imports: [FormsModule],
  templateUrl: './quiz-config.component.html',
  styleUrl: './quiz-config.component.css'
})
export class QuizConfigComponent {

  @Input()
  dataconfig:QuizConfig;


  test()
  {
    console.log(this.dataconfig)
  }
}
