
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
  
  {
    path: 'forgotpassword1',
    loadChildren: () => import('./forgetpassword1/forgetpassword1.module').then( m => m.Forgetpassword1PageModule)
  },
  {
    path: 'reportingfiltreact',
    loadChildren: () => import('./reportingfiltreact/reportingfiltreact.module').then( m => m.ReportingfiltreactPageModule)
  },
  {
    path: 'reportingfiltrepart',
    loadChildren: () => import('./reportingfiltrepart/reportingfiltrepart.module').then( m => m.ReportingfiltrepartPageModule)
  },
  {
    path: 'reporting-participant',
    loadChildren: () => import('./reporting-participant/reporting-participant.module').then( m => m.ReportingParticipantPageModule)
  },
  {
    path: 'reporting',
    loadChildren: () => import('./reporting/reporting.module').then( m => m.ReportingPageModule)
  },




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




