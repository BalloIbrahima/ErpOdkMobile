import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PersonnelPageRoutingModule } from './personnel-routing.module';

import { PersonnelPage } from './personnel.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PersonnelPageRoutingModule
  ],
  declarations: [PersonnelPage]
})
export class PersonnelPageModule {}
