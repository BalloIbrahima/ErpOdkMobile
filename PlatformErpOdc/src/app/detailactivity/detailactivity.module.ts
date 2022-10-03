import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DetailactivityPageRoutingModule } from './detailactivity-routing.module';

import { DetailactivityPage } from './detailactivity.page';
import { NgxPaginationModule } from 'ngx-pagination';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DetailactivityPageRoutingModule,
    NgxPaginationModule
  ],
  declarations: [DetailactivityPage]
})
export class DetailactivityPageModule {}
