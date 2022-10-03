import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TachedesignationPageRoutingModule } from './tachedesignation-routing.module';

import { TachedesignationPage } from './tachedesignation.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TachedesignationPageRoutingModule
  ],
  declarations: [TachedesignationPage]
})
export class TachedesignationPageModule {}
