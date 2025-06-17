import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private  http:HttpClient) { }

  baseURl='https://jsonplaceholder.typicode.com/users';
  allusers()
  {
    return this.http.get<User[]>(this.baseURl);
  }

  finduserById(id:number)
  {
    return this.http.get<User>(this.baseURl + '/' + id);
  }
}
