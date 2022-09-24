import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DetailslistesPageRoutingModule } from './detailslistes-routing.module';

import { DetailslistesPage } from './detailslistes.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DetailslistesPageRoutingModule
  ],
  declarations: [DetailslistesPage]
})
export class DetailslistesPageModule {}
