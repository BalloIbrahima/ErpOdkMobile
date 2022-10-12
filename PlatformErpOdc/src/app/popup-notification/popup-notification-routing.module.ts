import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PopupNotificationPage } from "./PopupNotificationPage";

const routes: Routes = [
  {
    path: '',
    component: PopupNotificationPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PopupNotificationPageRoutingModule {}
