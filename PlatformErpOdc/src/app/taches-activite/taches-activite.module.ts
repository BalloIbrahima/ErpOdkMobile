import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TachesActivitePageRoutingModule } from './taches-activite-routing.module';

import { TachesActivitePage } from './taches-activite.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TachesActivitePageRoutingModule
  ],
  declarations: [TachesActivitePage]
})
export class TachesActivitePageModule {}
