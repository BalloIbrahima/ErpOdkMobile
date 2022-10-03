import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {

    path: 'taches-activite',
    loadChildren: () => import('./taches-activite/taches-activite.module').then( m => m.TachesActivitePageModule)
  },



  {
    path: '',
    redirectTo: 'mdp-oublie',
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
  {
    path: 'accueil',
    loadChildren: () => import('./accueil/accueil.module').then( m => m.AccueilPageModule)
  },
  {
    path: 'login',
    loadChildren: () => import('./login/login.module').then( m => m.LoginPageModule)
  },
  {

    path: 'popup-notification',
    loadChildren: () => import('./popup-notification/popup-notification.module').then( m => m.PopupNotificationPageModule)
  },
  
  {

    path: 'profil',
    loadChildren: () => import('./profil/profil.module').then( m => m.ProfilPageModule)
  },
  {
    path: 'liste-parcipant',
    loadChildren: () => import('./liste-parcipant/liste-parcipant.module').then( m => m.ListeParcipantPageModule)
  },
  


  

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
