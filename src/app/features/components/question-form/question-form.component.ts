import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { Question } from '../../../core/models/question';
import { OptionFormComponent } from "../option-form/option-form.component";
import { Option } from '../../../core/models/option';

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

  ngOnInit(): void {
    this.qfrm=new FormGroup({
      id:new FormControl(),
      name:new FormControl(),
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
}
