import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Designing1PageRoutingModule } from './designing1-routing.module';

import { Designing1Page } from './designing1.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Designing1PageRoutingModule
  ],
  declarations: [Designing1Page]
})
export class Designing1PageModule {}
