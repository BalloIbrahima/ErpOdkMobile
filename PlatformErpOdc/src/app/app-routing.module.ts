import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'lier-salle-activity',
    pathMatch: 'full'
  },

  {
    path: 'login',
    loadChildren: () => import('./login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'sidebare',
    loadChildren: () => import('./sidebare/sidebare.module').then( m => m.SidebarePageModule)
  },
  
  {
    path: 'creer-activite',
    loadChildren: () => import('././creer-activite/creer-activite.module').then( m => m.CreerActivitePageModule)
  },
  {
    path: 'allactivity',
    loadChildren: () => import('./allactivity/allactivity.module').then( m => m.AllactivityPageModule)
  },
  {
    path: 'detailactivity',
    loadChildren: () => import('./detailactivity/detailactivity.module').then( m => m.DetailactivityPageModule)
  },
  {
    path: 'salles',
    loadChildren: () => import('./salles/salles.module').then( m => m.SallesPageModule)
  },
  {
    path: 'lier-salle-activity',
    loadChildren: () => import('./lier-salle-activity/lier-salle-activity.module').then( m => m.LierSalleActivityPageModule)
  },
  {
    path: 'creer-salle',
    loadChildren: () => import('./creer-salle/creer-salle.module').then( m => m.CreerSallePageModule)
  },



  

 

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
