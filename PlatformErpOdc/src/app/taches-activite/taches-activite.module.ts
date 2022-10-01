import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TachesActivitePageRoutingModule } from './taches-activite-routing.module';

import { TachesActivitePage } from './taches-activite.page';
import { NgxPaginationModule } from 'ngx-pagination';
import { MatMenuModule } from '@angular/material/menu';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TachesActivitePageRoutingModule,
    NgxPaginationModule,
    MatMenuModule,
  ],
  declarations: [TachesActivitePage],
})
export class TachesActivitePageModule {}
