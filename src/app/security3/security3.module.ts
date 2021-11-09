import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Security3PageRoutingModule } from './security3-routing.module';

import { Security3Page } from './security3.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Security3PageRoutingModule
  ],
  declarations: [Security3Page]
})
export class Security3PageModule {}
