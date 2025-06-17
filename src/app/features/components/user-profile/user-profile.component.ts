import { Component, OnInit } from '@angular/core';
import { User } from '../../../core/models/user';
import { UserService } from '../../../core/services/user.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-user-profile',
  imports: [],
  templateUrl: './user-profile.component.html',
  styleUrl: './user-profile.component.css'
})
export class UserProfileComponent implements OnInit {
  
  user:User;
  
  constructor(private userService: UserService, private route: ActivatedRoute) { 
       this.user = new User(''); 
       console.log(this.user)  
  }
 
  ngOnInit(): void {
    const idString: string | null = this.route.snapshot.paramMap.get('id');
    if(idString !== null) {
      const id: number = parseInt(idString, 10);
    this.userService.finduserById((id)).subscribe(u=>{
    this.user = u;
    console.log("User Profile: ", this.user);
    });
   
   }
  else {
      console.error("User ID is null");
    }
  }

 
}
