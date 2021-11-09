import { Component, OnInit } from '@angular/core';
import { ActionSheetController, ModalController } from '@ionic/angular';
import { Router, ActivatedRoute } from '@angular/router';
import { BookingPage } from '../booking/booking.page';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-designing3',
  templateUrl: './designing3.page.html',
  styleUrls: ['./designing3.page.scss'],
})
export class Designing3Page implements OnInit {
  company: string="The Grid Studio";

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
