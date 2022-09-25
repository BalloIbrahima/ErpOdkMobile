import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { UseraddformPageRoutingModule } from './useraddform-routing.module';

import { UseraddformPage } from './useraddform.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    UseraddformPageRoutingModule
  ],
  declarations: [UseraddformPage]
})
export class UseraddformPageModule {}
