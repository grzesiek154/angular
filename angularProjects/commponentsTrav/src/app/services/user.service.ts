import { Injectable } from '@angular/core';
// import { Observable } from 'rxjs/Observable';
import { Observable } from 'rxjs';
import { of } from 'rxjs';
import { User } from '../models/User';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  data: Observable<any>;
  users: User[];

  constructor() { 
    this.users = [
      {
       firstName: 'John',
       lastName: 'Doe',
       email: 'johndoe@gmail.com'
       },
      //  image: "http://lorempixel.com/600/600/people/3",
    {
     firstName: 'Anna',
     lastName: 'Nowak',
     email: 'anna@gmail.com'
    //  image: "http://lorempixel.com/600/600/people/2",
    
  },
  {
   firstName: 'Karolina',
   lastName: 'Chaml',
   email: 'karolina@gmail.com'
  //  image: "http://lorempixel.com/600/600/people/1",

} 
   ];
  }

  getUsers(): Observable<User[]> {
    console.log("fetching users from service");
    return of(this.users);
  }

  addUser(user: User) {
    this.users.unshift(user);
  }
}
