import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Designing3Page } from './designing3.page';

const routes: Routes = [
  {
    path: '',
    component: Designing3Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Designing3PageRoutingModule {}
