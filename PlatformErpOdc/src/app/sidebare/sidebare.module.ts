import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SidebarePageRoutingModule } from './sidebare-routing.module';

import { SidebarePage } from './sidebare.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SidebarePageRoutingModule
  ],
  declarations: [SidebarePage]
})
export class SidebarePageModule {}
