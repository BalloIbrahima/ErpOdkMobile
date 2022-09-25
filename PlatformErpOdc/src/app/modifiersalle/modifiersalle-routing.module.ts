import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ModifiersallePage } from './modifiersalle.page';

const routes: Routes = [
  {
    path: '',
    component: ModifiersallePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ModifiersallePageRoutingModule {}
