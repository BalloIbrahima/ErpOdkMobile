import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';

import { DashboardPageRoutingModule } from './dashboard-routing.module';

import { DashboardPage } from './dashboard.page';
import { RouteReuseStrategy } from '@angular/router';
import { AccueilPipe } from '../accueil.pipe';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    DashboardPageRoutingModule,
    IonicModule.forRoot(),HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  declarations: [DashboardPage,AccueilPipe],
  
})
export class DashboardPageModule {}
