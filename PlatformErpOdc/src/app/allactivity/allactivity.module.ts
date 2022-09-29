import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AllactivityPageRoutingModule } from './allactivity-routing.module';

import { AllactivityPage } from './allactivity.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AllactivityPageRoutingModule
  ],
  declarations: [AllactivityPage]
})
export class AllactivityPageModule {}
