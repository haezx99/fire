import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Electrical1PageRoutingModule } from './electrical1-routing.module';

import { Electrical1Page } from './electrical1.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Electrical1PageRoutingModule
  ],
  declarations: [Electrical1Page]
})
export class Electrical1PageModule {}
