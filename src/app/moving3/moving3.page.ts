import { Component, OnInit } from '@angular/core';
import { ActionSheetController, ModalController } from '@ionic/angular';
import { Router, ActivatedRoute } from '@angular/router';
import { BookingPage } from '../booking/booking.page';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-moving3',
  templateUrl: './moving3.page.html',
  styleUrls: ['./moving3.page.scss'],
})
export class Moving3Page implements OnInit {
  company: string="AKmovers";

  constructor(
    public actionSheetController: ActionSheetController,
    private modalCtrl: ModalController,
    private route: ActivatedRoute,
    private dataService: DataService
  ) {}

  ngOnInit() {
  }

  async onClick() {
    const modal = await this.modalCtrl.create({
      component: BookingPage,
      cssClass: 'modal-transparency',
      id: 'ModalForm'
    });
    return await modal.present();
  }
}
