import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NgxPaginationModule } from 'ngx-pagination';
import { IonicModule } from '@ionic/angular';

import { PostulantsTirePageRoutingModule } from './postulants-tire-routing.module';

import { PostulantsTirePage } from './postulants-tire.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PostulantsTirePageRoutingModule,
    NgxPaginationModule
  ],
  declarations: [PostulantsTirePage]
})
export class PostulantsTirePageModule {}
