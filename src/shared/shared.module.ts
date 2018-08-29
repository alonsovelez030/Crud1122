/* Ionic & Angular Core */
import { NgModule } from '@angular/core';
import { IonicModule } from 'ionic-angular';
import { CommonModule } from '@angular/common';

/* Components */
import { EditUserComponent } from './components/edit-user/edit-user';

@NgModule({
	declarations: [
    EditUserComponent
	],
	imports: [],
	entryComponents:[],
	exports: [
    EditUserComponent
	]
})
export class SharedModule {}
