import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ActivitePageRoutingModule } from './activite-routing.module';

import { ActivitePage } from './activite.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ActivitePageRoutingModule
  ],
  declarations: [ActivitePage]
})
export class ActivitePageModule {}
