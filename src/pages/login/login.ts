import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AuthProvider } from '../../providers/auth/auth';
import { RegisterPage } from '../register/register';
import { HomePage } from '../home/home';

/**
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {
private email : string;
private  password : string;

  constructor(public navCtrl: NavController, public navParams: NavParams, private auth: AuthProvider) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }
  login(){
    console.log(this.email, this.password)
    if(this.email != null && this.password != null){
      this.auth.login(this.email, this.password).then(resp=>{
        console.log(resp)

        //save user in localstorage
        this.auth.saveUser(resp.user.uid)
        this.navCtrl.push(HomePage)

      })
    }
    else{
      console.log("credentials not provided")
    }
  }

  register(){
    this.navCtrl.push(RegisterPage)
  }
}
