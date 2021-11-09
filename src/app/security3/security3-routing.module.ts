import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Security3Page } from './security3.page';

const routes: Routes = [
  {
    path: '',
    component: Security3Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Security3PageRoutingModule {}
