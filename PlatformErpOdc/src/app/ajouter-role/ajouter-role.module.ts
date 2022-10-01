import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AjouterRolePageRoutingModule } from './ajouter-role-routing.module';

import { AjouterRolePage } from './ajouter-role.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AjouterRolePageRoutingModule
  ],
  declarations: [AjouterRolePage]
})
export class AjouterRolePageModule {}
