import { Component, OnInit } from '@angular/core';
import { UserService } from '../../../core/services/user.service';
import { UserComponent } from "../user/user.component";
import { User } from '../../../core/models/user';

@Component({
  selector: 'app-users',
  imports: [UserComponent],
  templateUrl: './users.component.html',
  styleUrl: './users.component.css'
})
export class UsersComponent implements OnInit {

  users:User[] = [];
  constructor(private service:UserService) { }

  ngOnInit(): void {
    this.service.allusers().subscribe(s=>{
      console.log(s);
      
      this.users = s;
       console.log("apres............."+ this.users.length );
    });
  }

 
}
