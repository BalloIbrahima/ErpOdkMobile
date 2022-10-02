import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DetailpostulantPageRoutingModule } from './detailpostulant-routing.module';

import { DetailpostulantPage } from './detailpostulant.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DetailpostulantPageRoutingModule
  ],
  declarations: [DetailpostulantPage]
})
export class DetailpostulantPageModule {}
