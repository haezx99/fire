import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DesigningPage } from './designing.page';

const routes: Routes = [
  {
    path: '',
    component: DesigningPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DesigningPageRoutingModule {}
