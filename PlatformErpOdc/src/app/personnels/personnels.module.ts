import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NgxPaginationModule } from 'ngx-pagination';


import { IonicModule } from '@ionic/angular';

import { PersonnelsPageRoutingModule } from './personnels-routing.module';

import { PersonnelsPage } from './personnels.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PersonnelsPageRoutingModule,
    NgxPaginationModule
  ],
  declarations: [PersonnelsPage]
})
export class PersonnelsPageModule {}
