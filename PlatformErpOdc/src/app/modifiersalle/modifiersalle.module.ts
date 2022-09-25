import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ModifiersallePageRoutingModule } from './modifiersalle-routing.module';

import { ModifiersallePage } from './modifiersalle.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ModifiersallePageRoutingModule
  ],
  declarations: [ModifiersallePage]
})
export class ModifiersallePageModule {}
