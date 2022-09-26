import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ImportlistePageRoutingModule } from './importliste-routing.module';

import { ImportlistePage } from './importliste.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ImportlistePageRoutingModule
  ],
  declarations: [ImportlistePage]
})
export class ImportlistePageModule {}
