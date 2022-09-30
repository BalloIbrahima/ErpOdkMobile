import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { NouvelleEntitePageRoutingModule } from './nouvelle-entite-routing.module';

import { NouvelleEntitePage } from './nouvelle-entite.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    NouvelleEntitePageRoutingModule
  ],
  declarations: [NouvelleEntitePage]
})
export class NouvelleEntitePageModule {}
