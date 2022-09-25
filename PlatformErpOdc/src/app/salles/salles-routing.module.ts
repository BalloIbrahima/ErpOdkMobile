import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SallesPage } from './salles.page';

const routes: Routes = [
  {
    path: '',
    component: SallesPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SallesPageRoutingModule {}
