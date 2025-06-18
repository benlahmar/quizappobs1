import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { AuthFormService } from '../../services/auth-form.service';

@Component({
  selector: 'app-auth-form',
  imports: [ReactiveFormsModule],
  templateUrl: './auth-form.component.html',
  styleUrl: './auth-form.component.css'
})
export class AuthFormComponent implements OnInit{
    frm:FormGroup;
    constructor(private service:AuthFormService){}

  ngOnInit(): void {
    this.frm=new FormGroup({
      log:new FormControl('', Validators.required),
      pass:new FormControl('',[Validators.required,Validators.minLength(4)])

    })
  }
  onSubmit()
  {
    let data=this.frm.value;
    console.log(data)
    this.service.singIn(data.log,data.pass)
    console.log('authentification ')
   console.log( this.service.checkAuth())

  }



}
