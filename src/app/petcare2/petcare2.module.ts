import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Petcare2PageRoutingModule } from './petcare2-routing.module';

import { Petcare2Page } from './petcare2.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Petcare2PageRoutingModule
  ],
  declarations: [Petcare2Page]
})
export class Petcare2PageModule {}
