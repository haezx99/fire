import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Moving2Page } from './moving2.page';

const routes: Routes = [
  {
    path: '',
    component: Moving2Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Moving2PageRoutingModule {}
