import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Electrical2PageRoutingModule } from './electrical2-routing.module';

import { Electrical2Page } from './electrical2.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Electrical2PageRoutingModule
  ],
  declarations: [Electrical2Page]
})
export class Electrical2PageModule {}
