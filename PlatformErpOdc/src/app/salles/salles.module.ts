import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SallesPageRoutingModule } from './salles-routing.module';

import { SallesPage } from './salles.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SallesPageRoutingModule
  ],
  declarations: [SallesPage]
})
export class SallesPageModule {}
