import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DetailEntitePageRoutingModule } from './detail-entite-routing.module';

import { DetailEntitePage } from './detail-entite.page';

import {NgxPaginationModule} from 'ngx-pagination';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DetailEntitePageRoutingModule,
    NgxPaginationModule
  ],
  declarations: [DetailEntitePage]
})
export class DetailEntitePageModule {}
