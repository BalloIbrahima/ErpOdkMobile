import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

// <<<<<<<< HEAD:PlatformErpOdc/src/app/profil/profil.module.ts
// import { ProfilPageRoutingModule } from './profil-routing.module';

// import { ProfilPage } from './profil.page';
// ========
import { ImportlistePageRoutingModule } from './importliste-routing.module';

import { ImportlistePage } from './importliste.page';
// >>>>>>>> af5c9fafd1ba1e5f7f56129c4793584f0bfdb3e8:PlatformErpOdc/src/app/importliste/importliste.module.ts

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ImportlistePageRoutingModule
// <<<<<<<< HEAD:PlatformErpOdc/src/app/profil/profil.module.ts
//     ProfilPageRoutingModule
  
  ],
//   declarations: [ProfilPage]
// })
// export class ProfilPageModule {}
// ========
//     ImportlistePageRoutingModule
//   ],
  declarations: [ImportlistePage]
})
export class ImportlistePageModule {}
// >>>>>>>> af5c9fafd1ba1e5f7f56129c4793584f0bfdb3e8:PlatformErpOdc/src/app/importliste/importliste.module.ts
