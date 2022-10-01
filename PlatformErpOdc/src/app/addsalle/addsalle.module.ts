import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AddsallePageRoutingModule } from './addsalle-routing.module';

import { AddsallePage } from './addsalle.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AddsallePageRoutingModule
  ],
  declarations: [AddsallePage]
})
export class AddsallePageModule {}
