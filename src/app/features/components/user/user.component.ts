import { Component, Input } from '@angular/core';
import { User } from '../../../core/models/user';

@Component({
  selector: 'app-user',
  imports: [],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css'
})
export class UserComponent {

  @Input()
  udata:User;

}
