import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
@Component({
  selector: 'app-success',
  templateUrl: './success.page.html',
  styleUrls: ['./success.page.scss'],
})
export class SuccessPage  {

  icon = 'assets/succes-logo2.jpg';

  constructor(public modalCtrl: ModalController) {

  }

  dismissModal(){
    this.modalCtrl.dismiss();
  }

 

}
