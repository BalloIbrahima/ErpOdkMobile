import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ModifieruserPage } from './modifieruser.page';

const routes: Routes = [
  {
    path: '',
    component: ModifieruserPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ModifieruserPageRoutingModule {}
