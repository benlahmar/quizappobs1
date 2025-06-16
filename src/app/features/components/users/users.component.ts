import { Component, OnInit } from '@angular/core';
import { UserService } from '../../../core/services/user.service';

@Component({
  selector: 'app-users',
  imports: [],
  templateUrl: './users.component.html',
  styleUrl: './users.component.css'
})
export class UsersComponent implements OnInit {

  users:any;
  constructor(private service:UserService) { }

  ngOnInit(): void {
    this.service.allusers().subscribe(s=>{
      console.log(s);
      this.users = s;
    });

    console.log("apres............."+ this.users.length );
  }

 
}
