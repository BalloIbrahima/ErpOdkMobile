import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DesactiverpersonnelPageRoutingModule } from './desactiverpersonnel-routing.module';

import { DesactiverpersonnelPage } from './desactiverpersonnel.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DesactiverpersonnelPageRoutingModule
  ],
  declarations: [DesactiverpersonnelPage]
})
export class DesactiverpersonnelPageModule {}
