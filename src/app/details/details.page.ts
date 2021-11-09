import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { User } from '../pages/register/models/user.mode';

@Component({
  selector: 'app-details',
  templateUrl: './details.page.html',
  styleUrls: ['./details.page.scss'],
})
export class DetailsPage implements OnInit {

  uid: string;
  user = {} as User;

  constructor(private afAuth:AngularFireAuth, private afStore: AngularFirestore) { }

  ngOnInit() {
    this.getInfo();
  }
  async getInfo() {
    //getting current user uid
    this.uid = (await this.afAuth.currentUser).uid;
    // console.log(this.uid);

    //getting current user's basic info
    this.afStore
      .doc("user/" + this.uid)
      .valueChanges()
      .subscribe((data) => {
        this.user.name=data['name'];
        this.user.number=data['number'];
        this.user.email=data['email'];
        this.user.address=data['address'];
        this.user.password=data['password'];
      });
  }
}
