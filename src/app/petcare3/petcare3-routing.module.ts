import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Petcare3Page } from './petcare3.page';

const routes: Routes = [
  {
    path: '',
    component: Petcare3Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Petcare3PageRoutingModule {}
