import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'details-entite',
    pathMatch: 'full'
  },
  {
    path: 'login',
    loadChildren: () => import('./login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'entite',
    loadChildren: () => import('./entite/entite.module').then( m => m.EntitePageModule)
  },
  {
    path: 'role',
    loadChildren: () => import('./role/role.module').then( m => m.RolePageModule)
  },
  {
    path: 'details-entite',
    loadChildren: () => import('./details-entite/details-entite.module').then( m => m.DetailsEntitePageModule)
  },  {
    path: 'nouvelle-entite',
    loadChildren: () => import('./nouvelle-entite/nouvelle-entite.module').then( m => m.NouvelleEntitePageModule)
  },

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
