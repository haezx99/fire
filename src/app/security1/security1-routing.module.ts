import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Security1Page } from './security1.page';

const routes: Routes = [
  {
    path: '',
    component: Security1Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Security1PageRoutingModule {}
