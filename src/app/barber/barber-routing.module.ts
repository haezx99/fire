import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BarberPage } from './barber.page';

const routes: Routes = [
  {
    path: '',
    component: BarberPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BarberPageRoutingModule {}
