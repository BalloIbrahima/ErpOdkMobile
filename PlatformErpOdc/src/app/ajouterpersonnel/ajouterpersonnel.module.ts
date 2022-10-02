import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AjouterpersonnelPageRoutingModule } from './ajouterpersonnel-routing.module';

import { AjouterpersonnelPage } from './ajouterpersonnel.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AjouterpersonnelPageRoutingModule
  ],
  declarations: [AjouterpersonnelPage]
})
export class AjouterpersonnelPageModule {}
