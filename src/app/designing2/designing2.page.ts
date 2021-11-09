import { Component, OnInit } from '@angular/core';
import { ActionSheetController, ModalController } from '@ionic/angular';
import { Router, ActivatedRoute } from '@angular/router';
import { BookingPage } from '../booking/booking.page';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-designing2',
  templateUrl: './designing2.page.html',
  styleUrls: ['./designing2.page.scss'],
})
export class Designing2Page implements OnInit {
  company: string="IQI Concept";

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
