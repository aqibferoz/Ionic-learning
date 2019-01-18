import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { ApiProvider } from "../../providers/api/api";
import { AuthProvider } from "../../providers/auth/auth";
import { LoginPage } from '../login/login';

/**
 * Generated class for the RegisterPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-register',
  templateUrl: 'register.html',
})
export class RegisterPage {
 

  //instance variable which we can call by using this.email etc
  email : string;
  password : string;
  confirmPassword : string;
  

  constructor(public navCtrl: NavController, public navParams: NavParams, private api: ApiProvider, private auth: AuthProvider) {
    
  }

  ionViewDidLoad() {
    
    console.log('ionViewDidLoad RegisterPage');
  }
register(){
  console.log(this.email, this.password, this.confirmPassword)
  if(this.email !=null && this.password !=null && this.confirmPassword !=null){
      if(this.password === this.confirmPassword){

         this.auth.signup(this.email, this.password).then(resp =>{
           console.log(resp)
          this.navCtrl.push(LoginPage)
         })
      }else{
        console.log("password don't match")
      }
    }else{
      console.log("credential not provided")
    }
  
  
}
}
