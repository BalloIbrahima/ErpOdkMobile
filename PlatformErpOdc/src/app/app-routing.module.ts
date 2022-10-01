import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { ProfilPageModule } from './profil/profil.module';
import { ProfilPage } from './profil/profil.page';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: 'accueil',
    loadChildren: () => import('./accueil/accueil.module').then( m => m.AccueilPageModule)
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
    path: 'profil',
    loadChildren: () => import('./profil/profil.module').then(m => ProfilPageModule)
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
    path: 'detail-personnel',
    loadChildren: () => import('./detailpostulant/detailpostulant.module').then( m => m.DetailpostulantPageModule)
  },
  {
    path: 'entite',
    loadChildren: () => import('./entite/entite.module').then( m => m.EntitePageModule)
  },
  {
    path: 'details-entite',
    loadChildren: () => import('./details-entite/details-entite.module').then( m => m.DetailsEntitePageModule)
  },
  {
    path: 'role',
    loadChildren: () => import('./role/role.module').then( m => m.RolePageModule)
  },
  {
    path: 'details-entite',
    loadChildren: () => import('./details-entite/details-entite.module').then( m => m.DetailsEntitePageModule)
  },
  {
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
