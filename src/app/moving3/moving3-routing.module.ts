import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Moving3Page } from './moving3.page';

const routes: Routes = [
  {
    path: '',
    component: Moving3Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Moving3PageRoutingModule {}
