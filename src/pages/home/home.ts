import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { RegisterPage } from '../register/register';
import { LoginPage } from '../login/login';
import { ApiProvider } from '../../providers/api/api';
import { map } from 'rxjs/operators';


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
name : string;
email : string;
hobby : string;

product;

id;
  constructor(public navCtrl: NavController, private api: ApiProvider) {

  }
  addProduct(){
    console.log(this.name, this.email, this.hobby)
    let data = {
      name : this.name,
      email : this.email,
      hobby : this.hobby
      
    }
    this.api.addProduct(data).then(resp=>{
      console.log(resp)

    })
    //this will empty the fields once the add product button is clicked
    this.name = '';
    this.email = '',
    this.hobby = ''
  }


  getProducts(){
    this.api.getProducts().pipe(
      map(actions=> actions.map(product => {
        console.log(actions)
        const data = product.payload.doc.data();
        const id = product.payload.doc.id;
        return {id, ...data};
      }))).subscribe(resp =>{
        this.product = resp;
        console.log(this.product);
      })
  }

  deleteProduct(item){
    let id = item.id;
    this.api.deleteProduct(id).then(resp=>{
      console.log("deleted")
    })
  }
//this fnn will populate the data in the fields
  onClick(item){

    this.id = item.id;    //
    this.name = item.name;
    this.email = item.email;
    this.hobby = item.hobby;
    
  }
  updateProduct(item){
    
    let data = {
      name : this.name,
      email : this.email,
      hobby : this.hobby
      
    }
    this.api.updateProduct(this.id, data).then(resp =>{
      console.log("updated")
    })
  }
}
