import { JsonPipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { Quiz } from '../../../core/models/quiz';
import { Question } from '../../../core/models/question';
import { QuestionFormComponent } from "../question-form/question-form.component";
import { SharedDataService } from '../../../share/services/shared-data.service';

@Component({
  selector: 'app-quiz-form',
  imports: [JsonPipe, FormsModule, ReactiveFormsModule, QuestionFormComponent],
  templateUrl: './quiz-form.component.html',
  styleUrl: './quiz-form.component.css'
})
export class QuizFormComponent implements OnInit{
   
  data:Quiz;
  frm:FormGroup;
  value:string;
  constructor(private shared:SharedDataService){}

  ngOnInit(): void {
    
   this.frm=new FormGroup({
    id:new FormControl('',[]),
    name:new FormControl('',Validators.required),
    description:new FormControl('',Validators.required)
   
   });
   this.data=new Quiz(this.frm.value);
  this.shared.message$.subscribe(s=>{
    this.value=s;
  })

  }

changevalue(ss:string)
{
  this.shared.updateMessage(ss);
}

  onSubmit()
  {
    
    //send to back-end
  }


  getquestion(x:Question)
  {
    console.log(x)
     
     this.data.questions.push(x)
  }
}
