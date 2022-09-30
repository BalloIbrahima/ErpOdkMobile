import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AccueilPipe } from './accueil.pipe';
// import { DashboardPageRoutingModule } from './dashboard/dashboard-routing.module';
import { DashboardPageModule } from './dashboard/dashboard.module';

import {HttpClientModule} from '@angular/common/http';


@NgModule({
  declarations: [AppComponent],
  // imports: [BrowserModule, IonicModule.forRoot(), AppRoutingModule],

  imports: [BrowserModule, IonicModule.forRoot(), AppRoutingModule,HttpClientModule,
    FormsModule,DashboardPageModule,
    ReactiveFormsModule],

  providers: [{ provide: RouteReuseStrategy, useClass: IonicRouteStrategy }],
  bootstrap: [AppComponent],
})
export class AppModule {}
