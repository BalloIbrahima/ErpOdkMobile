import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EntitePage } from './entite.page';

const routes: Routes = [
  {
    path: '',
    component: EntitePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EntitePageRoutingModule {}
