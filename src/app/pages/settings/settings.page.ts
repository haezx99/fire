import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { LoadingController, ToastController, NavController } from '@ionic/angular';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.page.html',
  styleUrls: ['./settings.page.scss'],
})
export class SettingsPage implements OnInit {

  constructor(
      private alertCtrl: AlertController,
      private toastCtrl: ToastController,
 private loadingCtrl: LoadingController,
 
 private navCtrl: NavController,
 ) { }

  ngOnInit() {
  }

  CreatePrompt()
  {
this.alertCtrl.create({
  header: 'Sign Out?',
  message: 'Are sure to sign out?',
  
  buttons:[
    {
      text:"No",
      handler:(data)=>{
       // alert("user cancelled")
      }
    },
    {
      text:"Yes",
      handler:()=>{
        //alert("The user succesfully sign out");
        this.navCtrl.navigateRoot("login")
        
      }
      
    }
    
  ]
}).then((promptElement)=>{
  promptElement.present();
})
  }

}
