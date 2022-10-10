import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PopupNotificationPageRoutingModule } from './popup-notification-routing.module';

import { PopupNotificationPage } from "./PopupNotificationPage.1";

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PopupNotificationPageRoutingModule
  ],
  declarations: [PopupNotificationPage]
})
export class PopupNotificationPageModule {}
