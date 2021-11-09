import { Component, OnInit } from '@angular/core';

import { ModalController } from '@ionic/angular';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { LoadingController, NavController, ToastController } from '@ionic/angular';
import { Post } from './models/post.mode';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-booking',
  templateUrl: './booking.page.html',
  styleUrls: ['./booking.page.scss'],
})
export class BookingPage implements OnInit {
  id: string;
  uid: string;
  status: string;
  post = {} as Post;
  company:  any;

  constructor(
    public modalCtrl: ModalController,
    private toastCtrl: ToastController,
    private loadingCtrl: LoadingController,
    private navCtrl: NavController,
    private firestore: AngularFirestore,
    private afAuth: AngularFireAuth,
    private actRoute: ActivatedRoute
  ) {
    this.company = this.actRoute.snapshot.paramMap.get("company");
    console.log(this.company);
  }

  dismissModal() {
    this.modalCtrl.dismiss();
  }



  ngOnInit() {
  }
  async createPost(post: Post) {

    this.post.company = this.company;
    this.post.status = "In Progress";
    this.id = (await this.afAuth.currentUser).uid;
    if (this.formValidation()) {

      //show loader
      let loader = this.loadingCtrl.create({
        message: "Please wait..."
      });
      (await loader).present();
      console.log(this.id);
      try {

        await this.firestore.collection("user" + '/' + this.id + '/' + "booking").doc(post.pid).set(post);

      } catch (e) {
        this.showToast(e);
      }
      //dismiss loader
      (await loader).dismiss();


      this.navCtrl.navigateRoot("success");
    }
  }


  formValidation() {
    

    if (!this.post.service) {
      this.showToast("Enter service");
      return false;
    }

    if (!this.post.address) {
      this.showToast("Enter address");
      return false;
    }

    if (!this.post.time) {
      this.showToast("Enter time");
      return false;
    }

    if (!this.post.date) {
      this.showToast("Enter date");
      return false;
    }

    return true;
  }

  showToast(message: string) {
    this.toastCtrl.create({
      message: message,
      duration: 3000
    })
      .then(toastData => toastData.present());
  }
}






