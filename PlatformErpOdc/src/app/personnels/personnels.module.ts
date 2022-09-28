import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PersonnelsPageRoutingModule } from './personnels-routing.module';

import { PersonnelsPage } from './personnels.page';
// Personnels Table
import { NgxDatatableModule } from '@swimlane/ngx-datatable';
import { NgxPaginationModule } from 'ngx-pagination';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PersonnelsPageRoutingModule,
    // Personnels Table
    NgxDatatableModule,
    NgxPaginationModule
  ],
  declarations: [PersonnelsPage]
})
export class PersonnelsPageModule {}
