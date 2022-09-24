import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DetailslistesPage } from './detailslistes.page';

const routes: Routes = [
  {
    path: '',
    component: DetailslistesPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DetailslistesPageRoutingModule {}
