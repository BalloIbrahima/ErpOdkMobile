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