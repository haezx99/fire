import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Security2PageRoutingModule } from './security2-routing.module';

import { Security2Page } from './security2.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Security2PageRoutingModule
  ],
  declarations: [Security2Page]
})
export class Security2PageModule {}
