import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ReportingParticipantPageRoutingModule } from './reporting-participant-routing.module';

import { ReportingParticipantPage } from './reporting-participant.page';
import { NgxPaginationModule } from 'ngx-pagination';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ReportingParticipantPageRoutingModule,
    NgxPaginationModule
  ],
  declarations: [ReportingParticipantPage]
})
export class ReportingParticipantPageModule {}
