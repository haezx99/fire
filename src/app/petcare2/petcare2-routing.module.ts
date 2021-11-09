import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Petcare2Page } from './petcare2.page';

const routes: Routes = [
  {
    path: '',
    component: Petcare2Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Petcare2PageRoutingModule {}
