
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
    // redirectTo: 'accueil',
    // pathMatch:'full'

    redirectTo: 'activite',
   pathMatch: 'full'
  },
// =======
//     redirectTo: 'useraddform',
  {
    path: 'login',
    loadChildren: () => import('./login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'ajout-entite',
    loadChildren: () => import('./ajout-entite/ajout-entite.module').then( m => m.AjoutEntitePageModule)
  },

{
    path: 'useraddform',
    loadChildren: () => import('./useraddform/useraddform.module').then( m => m.UseraddformPageModule)
},
{
    path: 'liste-personnel-entite',
    loadChildren: () => import('./liste-personnel-entite/liste-personnel-entite.module').then( m => m.ListePersonnelEntitePageModule)
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
    path: 'modifieruser',
    loadChildren: () => import('./modifieruser/modifieruser.module').then( m => m.ModifieruserPageModule)
  },
  {
    path: 'addsalle',
    loadChildren: () => import('./addsalle/addsalle.module').then( m => m.AddsallePageModule)
  },
  {
    path: 'modifiersalle',
    loadChildren: () => import('./modifiersalle/modifiersalle.module').then( m => m.ModifiersallePageModule)
  },

{
    path: 'tirage',
    loadChildren: () => import('./tirage/tirage.module').then( m => m.TiragePageModule)
  },
  {
    path: 'activite',
    loadChildren: () => import('./activite/activite.module').then( m => m.ActivitePageModule)
  },


];



@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
// import { NgModule } from '@angular/core';
// import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

// const routes: Routes = [
//   {
//     path: 'home',
//     loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
//   },
//   {
//     path: '',
//     redirectTo: 'home',
//     pathMatch: 'full'
//   },
//   {
//     path: 'login',
//     loadChildren: () => import('./login/login.module').then( m => m.LoginPageModule)
//   },
//   {
//     path: 'activite',
//     loadChildren: () => import('./activite/activite.module').then( m => m.ActivitePageModule)
//   },

// ];

// @NgModule({
//   imports: [
//     RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
//   ],
//   exports: [RouterModule]
// })


