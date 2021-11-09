import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Electrical2Page } from './electrical2.page';

const routes: Routes = [
  {
    path: '',
    component: Electrical2Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Electrical2PageRoutingModule {}
