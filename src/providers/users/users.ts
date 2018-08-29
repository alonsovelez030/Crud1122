import { Injectable } from '@angular/core';

/* Interfaces */
import { User } from '../../shared/interfaces/user.interface';


@Injectable()
export class UsersProvider {

  users:User[] = [
    {
      email:"avmsolucion@hotmail.com",
      password:"alonso1200",
      name:"Alonso Velez Marulanda",
      cellphone:3204880761
    },
    {
      email:"alonso_work@hotmail.com",
      password:"alonso1200",
      name:"Juan Paco de la Mar",
      cellphone:3205636598
    },
    {
      email:"avelez@gmail.com",
      password:"alonso1200",
      name:"Elizabeth Lopez Hernandez",
      cellphone:3215698546
    },
  ];

  constructor() {}

  getUsers(){
    return this.users;
  }

  createUser(){}

  updateUser(){}

  deleteUser(){}
}
