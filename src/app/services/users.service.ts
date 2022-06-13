import { UserInterface } from './../interfaces/user';
import { Injectable } from "@angular/core";
import { User } from "../classes/user";

@Injectable({
  providedIn: 'root'
})

export class UsersService {
  Users: User[] = [
    {
      id: 1,
      name: 'Marilisa1',
      lastname: 'Furia1',
      email: 'm@me.com',
      fiscalcode: 'FRUMLS70E53D95W',
      province: 'Bergamo',
      phone: '154789624',
      age:42
    },
    {
      id: 2,
      name: 'Marilisa2',
      lastname: 'Furia2',
      email: 'm@me.com',
      fiscalcode: 'FRUMLS70E53D95W',
      province: 'Bergamo',
      phone: '154789624',
      age:42
    },
    {
      id: 3,
      name: 'Marilisa3',
      lastname: 'Furia3',
      email: 'm@me.com',
      fiscalcode: 'FRUMLS70E53D95W',
      province: 'Bergamo',
      phone: '154789624',
      age:42
    },
    {
      id: 4,
      name: 'Marilisa4',
      lastname: 'Furia4',
      email: 'm@me.com',
      fiscalcode: 'FRUMLS70E53D95W',
      province: 'Bergamo',
      phone: '154789624',
      age:42
    },
    {
      id: 5,
      name: 'Marilisa5',
      lastname: 'Furia5',
      email: 'm@me.com',
      fiscalcode: 'FRUMLS70E53D95W',
      province: 'Bergamo',
      phone: '154789624',
      age:42
    }
  ];

  getUsers () {  // questo è un metodo ossia un funzione della classe
  return this.Users;
  }

  deleteUserSS(user:User) {
    const index = this.Users.indexOf(user);
    if (index > -1) {
      this.Users.splice(index,1);
    }
  }

  updateUserSS(user:UserInterface) {
    const index = this.Users.findIndex((v) => v.id == user.id);
    if(index !== -1) {
      this.Users[index] = user;
    }
  }

  createUserSS(user:UserInterface) {
    this.Users.splice(0,0,user);
  }
}
