import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Designing2PageRoutingModule } from './designing2-routing.module';

import { Designing2Page } from './designing2.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Designing2PageRoutingModule
  ],
  declarations: [Designing2Page]
})
export class Designing2PageModule {}
