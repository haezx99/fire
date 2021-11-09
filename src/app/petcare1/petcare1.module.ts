import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Petcare1PageRoutingModule } from './petcare1-routing.module';

import { Petcare1Page } from './petcare1.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Petcare1PageRoutingModule
  ],
  declarations: [Petcare1Page]
})
export class Petcare1PageModule {}
