import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Security1PageRoutingModule } from './security1-routing.module';

import { Security1Page } from './security1.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Security1PageRoutingModule
  ],
  declarations: [Security1Page]
})
export class Security1PageModule {}
