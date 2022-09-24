import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ListPersonnelEntitePage } from './list-personnel-entite.page';

const routes: Routes = [
  {
    path: '',
    component: ListPersonnelEntitePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ListPersonnelEntitePageRoutingModule {}
