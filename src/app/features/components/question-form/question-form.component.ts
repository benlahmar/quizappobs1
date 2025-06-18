import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Question } from '../../../core/models/question';
import { OptionFormComponent } from "../option-form/option-form.component";
import { Option } from '../../../core/models/option';
import { QuizFormStateService } from '../../../share/services/quiz-form-state.service';

@Component({
  selector: 'app-question-form',
  imports: [ReactiveFormsModule, OptionFormComponent],
  templateUrl: './question-form.component.html',
  styleUrl: './question-form.component.css'
})
export class QuestionFormComponent implements OnInit {
  
  qfrm:FormGroup;
data:Question;
  @Output()
  notif=new EventEmitter<any>();

  constructor(private stateservice:QuizFormStateService) {
    
  }

  ngOnInit(): void {
    this.qfrm=new FormGroup({
      id:new FormControl(),
      name:new FormControl('',Validators.required),
      questionTypeId:new FormControl()
    })
    this.data=new Question(this.qfrm.value);
  }

  send()
  {
    
    //console.log(this.qfrm.value)
    this.notif.emit(this.data)
  }

  getoption(o:Option)
  {
    this.data.options.push(o);
  }
  getstate()
  {
    console.log('in question component')
    this.stateservice.change(this.qfrm.valid,'q')
    console.log(this.stateservice.state)
  }
}
