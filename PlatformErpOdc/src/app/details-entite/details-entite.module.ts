import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DetailsEntitePageRoutingModule } from './details-entite-routing.module';

import { DetailsEntitePage } from './details-entite.page';
import { NgxPaginationModule } from 'ngx-pagination';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DetailsEntitePageRoutingModule,
    NgxPaginationModule
  ],
  declarations: [DetailsEntitePage]
})
export class DetailsEntitePageModule {}
