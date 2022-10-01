import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CreerActivitePageRoutingModule } from './creer-activite-routing.module';

import { CreerActivitePage } from './creer-activite.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CreerActivitePageRoutingModule
  ],
  declarations: [CreerActivitePage]
})
export class CreerActivitePageModule {}
