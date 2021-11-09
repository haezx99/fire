import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from 'src/app/services/data.service';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { User } from '../register/models/user.mode';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {

  uid: string;
  user = {} as User;

    cardInf: any[];

    data = [];

    constructor( private dataService: DataService, private router: Router,
      private afAuth:AngularFireAuth, private afStore: AngularFirestore ) { }

    option = {
        slidesPerView: 1.5,
        centeredSlides: true,
        loop: true,
        spaceBetween: 10,
        // autoplay:true,
    
      }

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
          });
      }
    }
    

