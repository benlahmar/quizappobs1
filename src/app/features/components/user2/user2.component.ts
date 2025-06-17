import { Component, OnInit } from '@angular/core';
import { UserService } from '../../../core/services/user.service';
import { User } from '../../../core/models/user';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-user2',
  imports: [],
  templateUrl: './user2.component.html',
  styleUrl: './user2.component.css'
})
export class User2Component implements OnInit {

  user:User 
  constructor(private userService: UserService, private route: ActivatedRoute) { 
    this.user = new User(''); 
    console.log(this.user);
    
  }
  ngOnInit(): void {
    this.user = new User('');
     const idString: string | null = this.route.snapshot.paramMap.get('id');
    if(idString !== null) {
      const id: number = parseInt(idString, 10);
    this.userService.finduserById(id).subscribe(u => {
      this.user = u;
      console.log("User ", this.user);
    });
  }
  }
}
