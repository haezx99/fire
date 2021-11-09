import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Moving3PageRoutingModule } from './moving3-routing.module';

import { Moving3Page } from './moving3.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Moving3PageRoutingModule
  ],
  declarations: [Moving3Page]
})
export class Moving3PageModule {}
