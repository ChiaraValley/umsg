import { User } from './../classes/user';
import { UsersService } from '../services/users.service';
import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector    :'app-users',
  templateUrl :'users.component.html',
  styleUrls   :['users.component.css']
})

export class UsersComponent implements OnInit {

  title = 'Users da Classe';  // proprietà
  users: User [] = [];        // proprietà - User definisce l'array definito in interfaces
  usera: User [] = [];        // proprietà - User definisce l'array

  @Output () updateUser = new EventEmitter<User>();

  constructor (private service: UsersService) {}

  ngOnInit() {
    this.users = this.service.getUsers()
  }

  onDeleteUserMetodo(user: User){
    this.service.deleteUserSS(user)
  }

  onSelectUserMetodo(user: User){
    const userCopy = Object.assign({},user)
    this.updateUser.emit(userCopy);
  }

}
