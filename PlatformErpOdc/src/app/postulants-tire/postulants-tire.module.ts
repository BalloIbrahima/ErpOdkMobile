import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PostulantsTirePageRoutingModule } from './postulants-tire-routing.module';

import { PostulantsTirePage } from './postulants-tire.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PostulantsTirePageRoutingModule
  ],
  declarations: [PostulantsTirePage]
})
export class PostulantsTirePageModule {}
