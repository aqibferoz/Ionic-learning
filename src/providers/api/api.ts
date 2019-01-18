import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AngularFirestore } from "@angular/fire/firestore";

@Injectable()
export class ApiProvider {

  constructor(public http: HttpClient, private firestore: AngularFirestore) {
    console.log('Hello ApiProvider Provider');
  }
addProduct(data){
  return this.firestore.collection('Products').add(data);

}
getProduct(id){
  return this.firestore.collection('Products/'+ id).valueChanges();
}
getProducts(){
  return this.firestore.collection('Products').snapshotChanges();
}
updateProduct(id, data){
return this.firestore.collection('Products').doc(id).update(data);
}
deleteProduct(id){
  return this.firestore.collection('Products').doc(id).delete();
}
}
