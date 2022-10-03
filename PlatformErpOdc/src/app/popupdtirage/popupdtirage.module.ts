import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PopupdtiragePageRoutingModule } from './popupdtirage-routing.module';

import { PopupdtiragePage } from './popupdtirage.page';
import { NgxPaginationModule } from 'ngx-pagination';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PopupdtiragePageRoutingModule,
    NgxPaginationModule
  ],
  declarations: [PopupdtiragePage]
})
export class PopupdtiragePageModule {}
