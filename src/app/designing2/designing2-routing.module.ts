import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Designing2Page } from './designing2.page';

const routes: Routes = [
  {
    path: '',
    component: Designing2Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Designing2PageRoutingModule {}
