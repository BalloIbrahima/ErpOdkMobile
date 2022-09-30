
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy, RouterModule } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { AccueilPipe } from './accueil.pipe';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
//import { ModifierpersonnelPageModule } from './modifierpersonnel/modifierpersonnel.module';
import { ModifierPersonnelComponent } from './modifier-personnel/modifier-personnel.component';
import { ComponentTestComponent } from './component-test/component-test.component';

@NgModule({
  declarations: [AppComponent, AccueilPipe, ModifierPersonnelComponent,ComponentTestComponent],
  imports: [FormsModule, RouterModule.forRoot([]), IonicModule.forRoot({}),
    BrowserModule, AppRoutingModule],
  providers: [{ provide: RouteReuseStrategy, useClass: IonicRouteStrategy }],
  bootstrap: [AppComponent],
})
export class AppModule {}

