import { Component, Input, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { User } from './../classes/user';
import { UsersService } from './../services/users.service';

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.css'],
})

export class UserDetailsComponent implements OnInit {
  private userCopy: User;
  private __user: User;

  @Input() set user(user: User){
    this.__user = user;
    this.userCopy = Object.assign({},user);
  }

  get user() {
    return this.__user;
  }

  constructor(private UsersService: UsersService) {
    this.user = new User()
    this.__user = new User()
    this.userCopy = new User()
  }

  ngOnInit(): void {}

  saveUser() {
    if(this.user.id > 0) {
      this.UsersService.updateUserSS(this.user)
    } else {
      this.UsersService.createUserSS(this.user)
    }
    this.user = new User()
  }

  resetForm( form: FormGroup) {
    if(this.user.id === 0) {
      this.user = new User()
    } else {
      this.user = this.userCopy;
    }
  }
}
