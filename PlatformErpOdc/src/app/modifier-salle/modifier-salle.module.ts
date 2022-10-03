import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ModifierSallePageRoutingModule } from './modifier-salle-routing.module';

import { ModifierSallePage } from './modifier-salle.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ModifierSallePageRoutingModule
  ],
  declarations: [ModifierSallePage]
})
export class ModifierSallePageModule {}
