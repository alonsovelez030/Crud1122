import { Injectable } from '@angular/core';

/* Interfaces */
import { User } from '../../shared/interfaces/user.interface';


@Injectable()
export class UsersProvider {

  users:User[] = [
    {
      email:"billy@hotmail.com",
      password:"alonso1200",
      name:"Willian Henry",
      last_name:"Gates",
      cellphone:3204880761
    },
    {
      email:"apple@hotmail.com",
      password:"alonso1200",
      name:"Steve Paul",
      last_name:"Jobs",
      cellphone:3205636598
    },
    {
      email:"linux@gmail.com",
      password:"alonso1200",
      name:"Linus Benedict",
      last_name:"Torvalds",
      cellphone:3215698546
    },
    {
      email:"alonso_work@gmail.com",
      password:"alonso1200",
      name:"Alonso",
      last_name:"Velez Marulanda",
      cellphone:3215698546
    },
  ];

  constructor() {}

  getUsers():User[]{
    return this.users;
  }

  createUser(user):boolean{
    this.users.push(user);
    return true
  }

  updateUser(user):boolean{
    this.users
    .filter(x => x.email == user.email)
    .map( x => x = user);
    return true;
  }

  deleteUser(user):boolean{
    this.users = this.users.filter(x => x.email !== user.email);
    return true;
  }
}
