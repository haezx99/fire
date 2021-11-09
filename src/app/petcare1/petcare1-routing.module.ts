import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Petcare1Page } from './petcare1.page';

const routes: Routes = [
  {
    path: '',
    component: Petcare1Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Petcare1PageRoutingModule {}
