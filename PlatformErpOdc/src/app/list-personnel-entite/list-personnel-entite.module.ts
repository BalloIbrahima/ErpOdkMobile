import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ListPersonnelEntitePageRoutingModule } from './list-personnel-entite-routing.module';

import { ListPersonnelEntitePage } from './list-personnel-entite.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ListPersonnelEntitePageRoutingModule
  ],
  declarations: [ListPersonnelEntitePage]
})
export class ListPersonnelEntitePageModule {}
