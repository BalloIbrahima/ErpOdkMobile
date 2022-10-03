import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AllactivityPage } from './allactivity.page';

const routes: Routes = [
  {
    path: '',
    component: AllactivityPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AllactivityPageRoutingModule {}
