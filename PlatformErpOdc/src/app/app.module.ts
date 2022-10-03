import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';

import { NgxPaginationModule } from 'ngx-pagination';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DashboardPageRoutingModule } from './dashboard/dashboard-routing.module';
import { DashboardPageModule } from './dashboard/dashboard.module';
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";

import {HttpClientModule} from '@angular/common/http';
import { ClocheComponent } from './cloche/cloche.component';
import { PopupNotificationPage } from './popup-notification/popup-notification.page';


@NgModule({
  declarations: [AppComponent,PopupNotificationPage],
  // imports: [BrowserModule, IonicModule.forRoot(), AppRoutingModule],

  imports: [BrowserModule, IonicModule.forRoot(), AppRoutingModule,HttpClientModule,
    FormsModule,DashboardPageModule,NgxPaginationModule,BrowserAnimationsModule,
    ReactiveFormsModule],
  providers: [{ provide: RouteReuseStrategy, useClass: IonicRouteStrategy }],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],

})
export class AppModule { }
