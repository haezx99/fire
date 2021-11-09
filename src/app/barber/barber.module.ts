import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { BarberPageRoutingModule } from './barber-routing.module';

import { BarberPage } from './barber.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    BarberPageRoutingModule
  ],
  declarations: [BarberPage]
})
export class BarberPageModule {}
