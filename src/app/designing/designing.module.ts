import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DesigningPageRoutingModule } from './designing-routing.module';

import { DesigningPage } from './designing.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DesigningPageRoutingModule
  ],
  declarations: [DesigningPage]
})
export class DesigningPageModule {}
