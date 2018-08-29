import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { HomePage } from './home';

/* SharedModule (Pipes, Directives, Components) */
import { SharedModule } from '../../shared/shared.module';

@NgModule({
  declarations: [
    HomePage
  ],
  imports: [
    IonicPageModule.forChild(HomePage),
    SharedModule
  ],
  entryComponents: [],
  exports:[]
})
export class HomePageModule {}
