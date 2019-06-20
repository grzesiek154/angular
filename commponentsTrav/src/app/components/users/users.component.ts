import { Component, OnInit, ViewChild } from '@angular/core';
import { UserService } from '../../services/user.service';
import { User } from '../../models/User';


@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  user: User = {
    firstName: '',
    lastName: '',
    email: ''
  };
  users: User[];
  showExtended: boolean = true;
  loaded: boolean = false;
  enableAdd: boolean = false;
  currentClasses = {};
  currentStyles = {};
  showUserForm: boolean = false;
  @ViewChild('userForm') form: any;
  data: any;

  // we are injectiong DataService via dependency injection in constructor
  constructor(private userService: UserService) {
    
  }

  ngOnInit() {

    // setTimeout(()=> {
    this.userService.getUsers().subscribe(users => {
      this.users = users;
      this.loaded = true;
    });
      
     
    // }, 2000);
    
    this.setCurrentClasses();
    this.setCurrentStyles();


  }
  addUser(user: User) {
    this.user.isActive = true;
    this.user.registered = new Date();

    this.users.unshift(this.user);

    this.user = {
      firstName: '',
      lastName: '',
      email: ''
    };

  }

  setCurrentClasses() {
    this.currentClasses = {
      'btn-success': this.enableAdd
      // jezeli wartosc enabledAdd jest true, zostanie odana lassa btn-success
      // do znacznika z wyrazeniem [ngClass]="currentClasses"
    }
  }
  setCurrentStyles() {
    this.currentStyles = {
      'padding-top': this.showExtended ? '0' : '40px',
      'font-size': this.showExtended ? '' : '40px'
    }
  }

  // fireEvent(e) {
  //   console.log(e.target.value);
  //   console.log(e.type);
  // }
    onSubmit({value, valid}: {value: User, valid: boolean}) {

      if (!valid) {
        console.log('Form is not valid');
      } else {
        value.isActive = true;
        value.registered = new Date();
        value.hide = true;

       this.userService.addUser(value);

        this.form.reset();
      }
    }

}
