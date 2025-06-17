import { JsonPipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { Quiz } from '../../../core/models/quiz';
import { Question } from '../../../core/models/question';
import { QuestionFormComponent } from "../question-form/question-form.component";

@Component({
  selector: 'app-quiz-form',
  imports: [JsonPipe, FormsModule, ReactiveFormsModule, QuestionFormComponent],
  templateUrl: './quiz-form.component.html',
  styleUrl: './quiz-form.component.css'
})
export class QuizFormComponent implements OnInit{
   
  data:Quiz;
  frm:FormGroup;
  ngOnInit(): void {
    
   this.frm=new FormGroup({
    id:new FormControl('',[]),
    name:new FormControl('',Validators.required),
    description:new FormControl('',Validators.required)
   
   });
   this.data=new Quiz(this.frm.value);
  }
  onSubmit()
  {
    
    //send
  }


  getquestion(x:Question)
  {
    console.log(x)
     
     this.data.questions.push(x)
  }
}
