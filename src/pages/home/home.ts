import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { IonicPage } from 'ionic-angular';
import { AlertController } from 'ionic-angular';
import { ToastController } from 'ionic-angular';

/* Providers */
import { UsersProvider } from '../../providers/users/users';

@IonicPage()
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController,
              private users: UsersProvider,
              private alertCtrl: AlertController,
              private toastCtrl: ToastController) {
  }

  deleteUser(user){
    let alert = this.alertCtrl.create({
      title: 'Eliminar usuario!',
      message: 'Estas seguro de esta acción?',
      buttons: [
        {
          text: 'Cancelar',
          role: 'cancel',
          handler: () => {
            console.log('Cancel clicked');
          }
        },
        {
          text: 'Eliminar',
          handler: () => {
            let del = this.users.deleteUser(user);
            if (del) this.Toast("Usuario Eliminado Correctamente",4000)
          }
        }
      ]
    });
    alert.present();
  }

  updateUser(user){
    console.log(JSON.stringify(user));
  }

  Toast(msg,duration) {
    let toast = this.toastCtrl.create({
      message: msg,
      duration: duration,
      position: 'bottom'
    });
    toast.present();
  }

}
