import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SidebarePage } from './sidebare.page';

const routes: Routes = [
  {
    path: '',
    component: SidebarePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SidebarePageRoutingModule {}
