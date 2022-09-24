import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PersonnelsPage } from './personnels.page';

const routes: Routes = [
  {
    path: '',
    component: PersonnelsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PersonnelsPageRoutingModule {}
