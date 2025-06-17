import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Option } from '../../../core/models/option';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { of } from 'rxjs';

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
  ngOnInit(): void {
   
    this.ofrm=new FormGroup(
      {
        id:new FormControl(),
        name:new FormControl(),
        isAnswer:new FormControl()
      }
    )
  }

  send()
  {
    this.data=new Option(this.ofrm.value)
    this.notif.emit(this.data);
  }

}
