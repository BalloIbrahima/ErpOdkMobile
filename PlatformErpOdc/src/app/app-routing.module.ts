import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'tirage',
    pathMatch: 'full'
  },
  {
    path: 'login',
    loadChildren: () => import('./login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'detailtirage',
    loadChildren: () => import('./detailtirage/detailtirage.module').then( m => m.DetailtiragePageModule)
  },

  {
    path: 'tirage',
    loadChildren: () => import('./tirage/tirage.module').then( m => m.TiragePageModule)
  },
  {
    path: 'importliste',
    loadChildren: () => import('./importliste/importliste.module').then( m => m.ImportlistePageModule)
  },


  {
    path:'importlisteparticipant',
    loadChildren: () => import('./importer-listeparticipant/importer-listeparticipant.module').then(m=>m.ImporterListeparticipantPageModule)
  },


];


@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
