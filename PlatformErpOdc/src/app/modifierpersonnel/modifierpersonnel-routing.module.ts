import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ModifierpersonnelPage } from './modifierpersonnel.page';

const routes: Routes = [
  {
    path: '',
    component: ModifierpersonnelPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ModifierpersonnelPageRoutingModule {}
