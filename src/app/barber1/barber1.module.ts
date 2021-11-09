import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Barber1PageRoutingModule } from './barber1-routing.module';

import { Barber1Page } from './barber1.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Barber1PageRoutingModule
  ],
  declarations: [Barber1Page]
})
export class Barber1PageModule {}
