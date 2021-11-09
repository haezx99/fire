import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Electrical3Page } from './electrical3.page';

const routes: Routes = [
  {
    path: '',
    component: Electrical3Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Electrical3PageRoutingModule {}
