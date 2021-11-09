import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Petcare3PageRoutingModule } from './petcare3-routing.module';

import { Petcare3Page } from './petcare3.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Petcare3PageRoutingModule
  ],
  declarations: [Petcare3Page]
})
export class Petcare3PageModule {}
