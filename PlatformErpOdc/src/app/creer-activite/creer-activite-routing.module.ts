import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CreerActivitePage } from './creer-activite.page';

const routes: Routes = [
  {
    path: '',
    component: CreerActivitePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CreerActivitePageRoutingModule {}
