import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PopupNotificationPageRoutingModule } from './popup-notification-routing.module';



import { PopupNotificationPage } from './PopupNotificationPage';
import { ClocheComponent } from '../cloche/cloche.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PopupNotificationPageRoutingModule
  ],
  declarations: [PopupNotificationPage,ClocheComponent],
  schemas: [NO_ERRORS_SCHEMA]
})
export class PopupNotificationPageModule {}
