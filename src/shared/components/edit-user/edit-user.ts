import { Component } from '@angular/core';

/**
 * Generated class for the EditUserComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'edit-user',
  templateUrl: 'edit-user.html'
})
export class EditUserComponent {

  text: string;

  constructor() {
    console.log('Hello EditUserComponent Component');
    this.text = 'Hello World';
  }

}
