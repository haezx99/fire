import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Barber1Page } from './barber1.page';

const routes: Routes = [
  {
    path: '',
    component: Barber1Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Barber1PageRoutingModule {}
