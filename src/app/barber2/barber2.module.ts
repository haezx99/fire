import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Barber2PageRoutingModule } from './barber2-routing.module';

import { Barber2Page } from './barber2.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Barber2PageRoutingModule
  ],
  declarations: [Barber2Page]
})
export class Barber2PageModule {}
