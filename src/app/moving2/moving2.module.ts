import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Moving2PageRoutingModule } from './moving2-routing.module';

import { Moving2Page } from './moving2.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Moving2PageRoutingModule
  ],
  declarations: [Moving2Page]
})
export class Moving2PageModule {}
