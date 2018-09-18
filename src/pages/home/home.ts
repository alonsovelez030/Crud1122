import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { IonicPage } from 'ionic-angular';
import { AlertController } from 'ionic-angular';
import { ToastController } from 'ionic-angular';
import { ModalController, NavParams } from 'ionic-angular';
import { Push, PushObject, PushOptions } from '@ionic-native/push';

/* Providers */
import { UsersProvider } from '../../providers/users/users';

/* Components */
import { EditUserComponent } from '../../shared/components/edit-user/edit-user';

// inicializamos la configuración para android y ios
const options: PushOptions = {
  android: {
      senderID: '5015462100'
  },
  ios: {},
  windows: {},
  browser:{
    "pushServiceURL": 'http://push.api.phonegap.com/v1/push'
  }
};

@IonicPage()
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  pushObject: PushObject = this.push.init(options);

  constructor(public navCtrl: NavController,
              private users: UsersProvider,
              private alertCtrl: AlertController,
              private toastCtrl: ToastController,
              public modalCtrl: ModalController,
              private push: Push) {
      // comprobamos los permisos
      this.push.hasPermission()
      .then((res: any) => {
        if (res.isEnabled) {
          console.log('We have permission to send push notifications');
        } else {
          console.log('We do not have permission to send push notifications');
        }
      });

      this.pushObject.on('notification').subscribe((notification: any) => {
        //aquí recibimos las notificaciones de firebase
      });

      this.pushObject.on('registration').subscribe((registration: any) => {
        const registrationId = registration.registrationId;
        console.log(registrationId)
        //registrationId lo debes guardar en mysql o similar para reutilizar
      });

      this.pushObject.on('error').subscribe(error => {
        console.error('Error with Push plugin', error)
      });
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
            if (del) this.toast("Usuario Eliminado Correctamente",4000)
          }
        }
      ]
    });
    alert.present();
  }

  updateUser(user){
    let create = this.modalCtrl.create(EditUserComponent, { edit:true, data:user });
    create.present();
  }

  createUser(){
    let create = this.modalCtrl.create(EditUserComponent, { edit:false });
    create.present();
  }

  toast(msg,duration) {
    let toast = this.toastCtrl.create({
      message: msg,
      duration: duration,
      position: 'bottom'
    });
    toast.present();
  }

}
