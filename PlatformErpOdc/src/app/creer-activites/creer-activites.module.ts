import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CreerActivitesPageRoutingModule } from './creer-activites-routing.module';

import { CreerActivitesPage } from './creer-activites.page';
import { ClocheComponent } from '../cloche/cloche.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CreerActivitesPageRoutingModule
  ],
  declarations: [CreerActivitesPage ,ClocheComponent]
})
export class CreerActivitesPageModule {}
