import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ModifierpersonnelPageRoutingModule } from './modifierpersonnel-routing.module';

import { ModifierpersonnelPage } from './modifierpersonnel.page';
import { ClocheComponent } from '../cloche/cloche.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ModifierpersonnelPageRoutingModule
  ],
  declarations: [ModifierpersonnelPage, ClocheComponent]
})
export class ModifierpersonnelPageModule {}
