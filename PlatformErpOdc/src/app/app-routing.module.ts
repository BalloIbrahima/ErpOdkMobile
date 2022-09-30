import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  // {
  //   path: '',
  //   redirectTo: 'home',
  //   pathMatch: 'full'
  // },
  {
    path: '',
    redirectTo: 'nouveaupersonnel',
    pathMatch: 'full'
  },
  {
    path: 'login',
    loadChildren: () => import('./login/login.module').then( m => m.LoginPageModule)
  },
  {

    path: 'detailpostulant',
    loadChildren: () => import('./detailpostulant/detailpostulant.module').then( m => m.DetailpostulantPageModule)
  },

  {
    path: 'sidebare',
    loadChildren: () => import('./sidebare/sidebare.module').then( m => m.SidebarePageModule)
  },
  {
    path: 'accueil',
    loadChildren: () => import('./accueil/accueil.module').then( m => m.AccueilPageModule)
  },
  {
    path: 'nouveaupersonnel',
    loadChildren: () => import('./nouveaupersonnel/nouveaupersonnel.module').then( m => m.NouveaupersonnelPageModule)
  },  {
    path: 'modifierpersonnel',
    loadChildren: () => import('./modifierpersonnel/modifierpersonnel.module').then( m => m.ModifierpersonnelPageModule)
  },
  {
    path: 'desactiverpersonnel',
    loadChildren: () => import('./desactiverpersonnel/desactiverpersonnel.module').then( m => m.DesactiverpersonnelPageModule)
  },
  {
    path: 'supprimerpersonnel',
    loadChildren: () => import('./supprimerpersonnel/supprimerpersonnel.module').then( m => m.SupprimerpersonnelPageModule)
  },





];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
