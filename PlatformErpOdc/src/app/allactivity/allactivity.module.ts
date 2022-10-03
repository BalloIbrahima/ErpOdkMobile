import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NgxPaginationModule } from 'ngx-pagination';

import { IonicModule } from '@ionic/angular';

import { AllactivityPageRoutingModule } from './allactivity-routing.module';

import { AllactivityPage } from './allactivity.page';
import { ClocheComponent } from '../cloche/cloche.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AllactivityPageRoutingModule,
    NgxPaginationModule
  ],
  declarations: [AllactivityPage,ClocheComponent]
})
export class AllactivityPageModule {}
