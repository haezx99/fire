import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Barber3Page } from './barber3.page';

const routes: Routes = [
  {
    path: '',
    component: Barber3Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Barber3PageRoutingModule {}
