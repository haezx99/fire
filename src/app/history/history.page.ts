import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { LoadingController, ToastController } from '@ionic/angular';
import { Post } from '../booking/models/post.mode';


@Component({
  selector: 'app-history',
  templateUrl: './history.page.html',
  styleUrls: ['./history.page.scss'],
})
export class HistoryPage implements OnInit {
  id: string;
  posts = {} as Post;
  book: any;

  constructor(
    private firestore: AngularFirestore,
    private afAuth: AngularFireAuth,
    private loadingCtrl: LoadingController,
    private toastCtrl: ToastController,


  ) { }

  ngOnInit() {

  }
  ionViewWillEnter() {
    this.getInfo();
  }
  async getInfo() {
    this.id = (await this.afAuth.currentUser).uid;
    this.firestore.collection("user" + '/' + this.id + '/' + "booking")
      .snapshotChanges()
      .subscribe(data => {
        this.book = data.map(e => {
          if (e.payload.doc.data()["pid"] !== null) {
            return {
              pid: e.payload.doc.id,
              company: e.payload.doc.data()["company"],
              service: e.payload.doc.data()["service"],
              address: e.payload.doc.data()["address"],
              status: e.payload.doc.data()["status"],
              date: e.payload.doc.data()["date"],
            };
          }
        });
      });
  }
}

