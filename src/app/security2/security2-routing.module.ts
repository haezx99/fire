import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Security2Page } from './security2.page';

const routes: Routes = [
  {
    path: '',
    component: Security2Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Security2PageRoutingModule {}
