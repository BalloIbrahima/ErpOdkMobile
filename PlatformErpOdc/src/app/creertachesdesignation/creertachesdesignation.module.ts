import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CreertachesdesignationPageRoutingModule } from './creertachesdesignation-routing.module';

import { CreertachesdesignationPage } from './creertachesdesignation.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CreertachesdesignationPageRoutingModule
  ],
  declarations: [CreertachesdesignationPage]
})
export class CreertachesdesignationPageModule {}
