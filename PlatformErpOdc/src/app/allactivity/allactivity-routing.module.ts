import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AllactivityPage } from './allactivity.page';

const routes: Routes = [
  {
    path: '',
    component: AllactivityPage
  },
  {
    path: 'importer-participant/:id',
    loadChildren: () => import('../importer-listeparticipant/importer-listeparticipant.module').then( m => m.ImporterListeparticipantPageModule)
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AllactivityPageRoutingModule {}
