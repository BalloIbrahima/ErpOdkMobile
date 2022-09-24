import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AjoutEntitePageRoutingModule } from './ajout-entite-routing.module';

import { AjoutEntitePage } from './ajout-entite.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AjoutEntitePageRoutingModule
  ],
  declarations: [AjoutEntitePage]
})
export class AjoutEntitePageModule {}
