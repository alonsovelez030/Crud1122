import { Component } from '@angular/core';
import { NavController, NavParams, ViewController } from 'ionic-angular';
import { ToastController } from 'ionic-angular';

/* Interfaces */
import { User } from '../../../shared/interfaces/user.interface';

/* Providers */
import { UsersProvider } from '../../../providers/users/users';

@Component({
  selector: 'edit-user',
  templateUrl: 'edit-user.html',
})
export class EditUserComponent {

  edit:any;
  dataParam:User;
  formUser:User = {email:"",password:"",name:"",last_name:"",cellphone:0};
  passwordConfirm;

  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              public viewCtrl: ViewController,
              private users: UsersProvider,
              private toastCtrl: ToastController,) {
  }

  ionViewDidLoad() {
    this.edit = this.navParams.get('edit');
    this.dataParam = this.navParams.get('data');

    if(this.edit && this.dataParam && Object.keys(this.dataParam).length){
        this.formUser = this.dataParam;
    }
  }

  submit(){
    let send:boolean = true;
    let re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    let testEmail = re.test(this.formUser.email);

    if(this.formUser.email == '' || !testEmail) send = false;
    if(this.formUser.name == '') send = false;
    if(this.formUser.last_name == '') send = false;

    if (send){
      if(this.formUser.password == '' ||
        this.formUser.password !== this.passwordConfirm){
          this.toast("La contraseña no coincide",4000);
        }else{
          let create = this.users.createUser(this.formUser)
          if(create){
            this.toast("Usuario creado correctamente",3000);
            this.dismiss()
          }
        }
    }else{
      this.toast("Llene todos los campos correctamente",3000);
    }
  }

  dismiss() {
    this.viewCtrl.dismiss();
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
