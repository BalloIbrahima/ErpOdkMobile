import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ModifieruserPageRoutingModule } from './modifieruser-routing.module';

import { ModifieruserPage } from './modifieruser.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ModifieruserPageRoutingModule
  ],
  declarations: [ModifieruserPage]
})
export class ModifieruserPageModule {}
