import { Component, OnInit } from '@angular/core';
import { Quiz } from '../../../core/models/quiz';
import { quizdata } from '../../../core/data1';
import { QuestionComponent } from "../question/question.component";
import { PaginationComponent } from "../../../share/components/pagination/pagination.component";
import { QuizConfigComponent } from "../quiz-config/quiz-config.component";
import { ClockComponent } from "../../../share/components/clock/clock.component";
import { CommonModule, PercentPipe } from '@angular/common';
import { ColorDirective } from '../../../share/directives/color.directive';
import { TestPipe } from '../../../share/pipes/test.pipe';
import { QuizPipe } from '../../../share/pipes/quiz.pipe';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { csharp } from '../../../core/charp';

@Component({
  selector: 'app-quiz',
  imports: [FormsModule, QuizPipe, TestPipe, PercentPipe, ColorDirective, CommonModule, QuestionComponent, PaginationComponent, QuizConfigComponent, ClockComponent],
  templateUrl: './quiz.component.html',
  styleUrl: './quiz.component.css'
})
export class QuizComponent implements OnInit {
  
   data:Quiz;
  currentquestion=0;
  epage:number=1;
  mode='quiz'
  x:any;
  duree:number=0;
slug:any;
  constructor(private route:ActivatedRoute) {
  }

  ngOnInit(): void {
   

    this.route.params.subscribe(p=>{
      this.slug=p['quizId'];
      if(this.slug=='aspnet')
      {
         this.data=new Quiz(quizdata);
      }
      else{
         this.data=new Quiz(csharp);
      }
    });

  
    setInterval(() => {
    this.duree++;
    if(this.duree>this.data.config.duration)
    {
      this.mode="submit"
    }
   }, 1000);
    
  }

  recuperer(x:any)
  {
    console.log("recuperation de :  "+x);
    this.currentquestion=x;
  }
  
  changemod(s:string)
  {
    this.mode=s;
  }
 



}
