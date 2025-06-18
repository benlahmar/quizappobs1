import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Option } from '../../../core/models/option';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { of } from 'rxjs';
import { not } from 'rxjs/internal/util/not';
import { QuizFormStateService } from '../../../share/services/quiz-form-state.service';

@Component({
  selector: 'app-option-form',
  imports: [ReactiveFormsModule],
  templateUrl: './option-form.component.html',
  styleUrl: './option-form.component.css'
})
export class OptionFormComponent implements OnInit{
    data:Option;
  ofrm:FormGroup;

  @Output()
  notif=new EventEmitter<any>()
constructor(private statservice:QuizFormStateService){}

  ngOnInit(): void {
   
    this.ofrm=new FormGroup(
      {
        id:new FormControl('',Validators.required),
        name:new FormControl('',Validators.required),
        isAnswer:new FormControl()
      }
    )
  }

  send()
  {
    this.data=new Option(this.ofrm.value)
    this.notif.emit(this.data);
  }
  sendstate()
  {
    //this.notif.emit(this.ofrm.valid)
    this.statservice.change(this.ofrm.valid,'o')
    console.log("valeur du status de option "+this.ofrm.valid)
  }

}
