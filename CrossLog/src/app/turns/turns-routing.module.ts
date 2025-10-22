import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TurnsPage } from './turns.page';

const routes: Routes = [
  {
    path: '',
    component: TurnsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TurnsPageRoutingModule {}
