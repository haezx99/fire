import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Moving1PageRoutingModule } from './moving1-routing.module';

import { Moving1Page } from './moving1.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Moving1PageRoutingModule
  ],
  declarations: [Moving1Page]
})
export class Moving1PageModule {}
