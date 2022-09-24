import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DetailEntitePage } from './detail-entite.page';

const routes: Routes = [
  {
    path: '',
    component: DetailEntitePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DetailEntitePageRoutingModule {}
