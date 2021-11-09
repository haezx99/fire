import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Designing1Page } from './designing1.page';

const routes: Routes = [
  {
    path: '',
    component: Designing1Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Designing1PageRoutingModule {}
