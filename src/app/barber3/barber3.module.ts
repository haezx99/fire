import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Barber3PageRoutingModule } from './barber3-routing.module';

import { Barber3Page } from './barber3.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Barber3PageRoutingModule
  ],
  declarations: [Barber3Page]
})
export class Barber3PageModule {}
