import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AddsallePage } from './addsalle.page';

const routes: Routes = [
  {
    path: '',
    component: AddsallePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AddsallePageRoutingModule {}
