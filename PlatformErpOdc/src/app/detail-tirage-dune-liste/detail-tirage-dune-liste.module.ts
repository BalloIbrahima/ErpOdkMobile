import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DetailTirageDuneListePageRoutingModule } from './detail-tirage-dune-liste-routing.module';

import { DetailTirageDuneListePage } from './detail-tirage-dune-liste.page';
import { NgxPaginationModule } from 'ngx-pagination';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DetailTirageDuneListePageRoutingModule,
    NgxPaginationModule,
  ],
  declarations: [DetailTirageDuneListePage]
})
export class DetailTirageDuneListePageModule {}
