import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { LoadingController, ToastController, NavController } from '@ionic/angular';
import { User } from '../register/models/user.mode';
import { AuthenticationService } from 'src/app/services/auth';
import { Account } from 'src/app/services/data';

@Component({
 selector: 'app-login',
 templateUrl: './login.page.html',
 styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
user = {} as Account;
 constructor(
 private toastCtrl: ToastController,
 private loadingCtrl: LoadingController,
 private afAuth: AngularFireAuth,
 private navCtrl: NavController,
 private authServ: AuthenticationService
 ) {}

 ngOnInit() {}
 async login(user: Account){
 if(this.formValidation()) {
 //show loader
 let loader = this.loadingCtrl.create({
 message: "Please wait..."
 });
 (await loader).present();

 try {
 await this.afAuth
 .signInWithEmailAndPassword(user.email, user.password)
 .then (data => {
 console.log(data);
 //redirect to home page
 this.navCtrl.navigateRoot("home");
 })
 } catch (e) {
 this.showToast(e);
 }

 //dismis loader
 (await loader).dismiss();
 }
 }
 formValidation(){
  if(!this.user.email){
  this.showToast("Enter email");
  return false;
  }
  if(!this.user.password){
  this.showToast("Enter password");
  return false;
  }
  return true;
  }
  showToast (message:string){
  this.toastCtrl.create({
  message: message,
  duration: 3000
  }).then(toastData => toastData.present());
  }
 }