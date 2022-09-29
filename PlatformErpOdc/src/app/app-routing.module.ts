import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [

  {
    path: '',
    redirectTo: 'detailtirageduneliste',
    pathMatch: 'full'
  },
  {
    path: 'login',
    loadChildren: () => import('./login/login.module').then( m => m.LoginPageModule)
  },


  {
    path: 'detail-entite',
    loadChildren: () => import('./detail-entite/detail-entite.module').then( m => m.DetailEntitePageModule)
  },
  {
    path: 'detail-des-listes',
    loadChildren: () => import('./detail-des-listes/detail-des-listes.module').then( m => m.DetailDesListesPageModule)
  },
  {
    path: 'detailtirageduneliste',
    loadChildren: () => import('./detail-tirage-dune-liste/detail-tirage-dune-liste.module').then( m => m.DetailTirageDuneListePageModule)
  },


];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
