<<<<<<< HEAD

import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'accueil',
    pathMatch: 'full'
  },
  {
    path: 'login',
    loadChildren: () => import('./login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'personnels',
    loadChildren: () => import('./personnel/personnel.module').then( m => m.PersonnelPageModule)
  },
  {
    path: 'nouveau-personnel',
    loadChildren: () => import('./nouveaupersonnel/nouveaupersonnel.module').then( m => m.NouveaupersonnelPageModule)
  },
  {
    path: 'detailpersonnel',
    loadChildren: () => import('./detailpostulant/detailpostulant.module').then( m => m.DetailpostulantPageModule)
  },
=======
import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { AcceuilGuard } from './guard/acceuil/acceuil.guard';


const routes: Routes = [
  {
    path: '',
    redirectTo: 'dashboard',
    pathMatch: 'full'
  },

  {
    path: 'profil',
    loadChildren: () => import('./profil/profil.module').then( m => m.ProfilPageModule),
    // canActivate: [AcceuilGuard] 
  },
  {
    path: 'personnel',
    loadChildren: () => import('./personnel/personnel.module').then( m => m.PersonnelPageModule),
    // canActivate: [AcceuilGuard] 
  },

>>>>>>> karimSave
  {
    path: 'accueil',
    loadChildren: () => import('./accueil/accueil.module').then( m => m.AccueilPageModule),
    // canActivate: [AcceuilGuard] 
  },
<<<<<<< HEAD
  // {
  //   path: 'profil'
  //   loadChildren: () => import('./profil/profil.module').then( m => m.ProfilPageModule)
  //  },


];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
=======
  {
    path: 'login',
    loadChildren: () => import('./login/login.module').then( m => m.LoginPageModule)
  },

  {
    path: 'dashboard',
    loadChildren: () => import('./dashboard/dashboard.module').then( m => m.DashboardPageModule),
    canActivate: [AcceuilGuard] 
  },
  {
    path: 'forgotpassword',
    loadChildren: () => import('./forgotpassword/forgotpassword.module').then( m => m.ForgotpasswordPageModule)
  },

];


@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }

>>>>>>> karimSave
