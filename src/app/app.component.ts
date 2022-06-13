import { Component } from '@angular/core';
import { User } from './classes/user';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {

  showForm: boolean = false;
  UserSelected: User = new User();

  updateUser(user: User) {
    this.showForm = true;
    this.UserSelected = user;
  }

  newUser() {
    this.showForm = true;
    this.UserSelected = new User();
  }

}
