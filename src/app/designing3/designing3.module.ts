import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Designing3PageRoutingModule } from './designing3-routing.module';

import { Designing3Page } from './designing3.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Designing3PageRoutingModule
  ],
  declarations: [Designing3Page]
})
export class Designing3PageModule {}
