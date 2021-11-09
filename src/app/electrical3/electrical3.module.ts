import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Electrical3PageRoutingModule } from './electrical3-routing.module';

import { Electrical3Page } from './electrical3.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Electrical3PageRoutingModule
  ],
  declarations: [Electrical3Page]
})
export class Electrical3PageModule {}
