import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { NouvelleEntitePage } from './nouvelle-entite.page';

const routes: Routes = [
  {
    path: '',
    component: NouvelleEntitePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class NouvelleEntitePageRoutingModule {}
