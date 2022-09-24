import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DetailEntitePageRoutingModule } from './detail-entite-routing.module';

import { DetailEntitePage } from './detail-entite.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DetailEntitePageRoutingModule
  ],
  declarations: [DetailEntitePage]
})
export class DetailEntitePageModule {}
