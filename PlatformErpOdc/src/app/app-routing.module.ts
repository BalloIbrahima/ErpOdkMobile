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
    path: 'tirage',
    loadChildren: () => import('./tirage/tirage.module').then( m => m.TiragePageModule)
  },
  {
    path: 'detail-tirage',
    loadChildren: () => import('./detailtirage/detailtirage.module').then( m => m.DetailtiragePageModule)
  },
  {
    path: 'detail-tirage-liste',
    loadChildren: () => import('./detail-tirage-dune-liste/detail-tirage-dune-liste.module').then( m => m.DetailTirageDuneListePageModule)
  },
  {
    path: 'detail-liste',
    loadChildren: () => import('./detail-des-listes/detail-des-listes.module').then( m => m.DetailDesListesPageModule)
  },
  {
    path: 'importeliste',
    loadChildren: () => import('./importliste/importliste.module').then( m => m.ImportlistePageModule)
  },
  
  {
    path: 'importer-participant',
    loadChildren: () => import('./importer-listeparticipant/importer-listeparticipant.module').then( m => m.ImporterListeparticipantPageModule)
  },  {
    path: 'ajouter-role',
    loadChildren: () => import('./ajouter-role/ajouter-role.module').then( m => m.AjouterRolePageModule)
  },


  

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
