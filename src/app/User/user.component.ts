import { User } from './../classes/user';
import { UsersService } from '../services/users.service';
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { faPencil, faTrash } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'tr[app-user]',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})

export class UserComponent implements OnInit {

  @Input('user-data') user: User | undefined;

  @Output('onDeleteUser') onDeleteUser = new EventEmitter();
  @Output()               onSelectUser = new EventEmitter();

  faPen = faPencil;
  faTra = faTrash;

  constructor(private Service:UsersService) { }

  ngOnInit(): void { }  // metodo

  deleteUser() {    // metodo
    this.onDeleteUser.emit(this.user);
  }

  updateUser() { // metodo
    this.onSelectUser.emit(this.user);
  }

}
