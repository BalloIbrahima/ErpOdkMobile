import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'login',
    loadChildren: () => import('./login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'ajouterpersonnel',
    loadChildren: () => import('./ajouterpersonnel/ajouterpersonnel.module').then( m => m.AjouterpersonnelPageModule)
  },
  {
    path: 'tirage',
    loadChildren: () => import('./tirage/tirage.module').then( m => m.TiragePageModule)
  },
  {
    path: 'importliste',
    loadChildren: () => import('./importliste/importliste.module').then( m => m.ImportlistePageModule)
  },
  {
    path:'importeparticipantaprenant',
    loadChildren: () => import('./importer-listeparticipant/importer-listeparticipant.module').then(m => m.ImporterListeparticipantPageModule)
  },
  {
    path: 'popupdtirage',
    loadChildren: () => import('./popupdtirage/popupdtirage.module').then( m => m.PopupdtiragePageModule)
  },
  {

    path: 'taches-activite',
    loadChildren: () => import('./taches-activite/taches-activite.module').then( m => m.TachesActivitePageModule)
  },



  {
    path: '',
    redirectTo: 'tirage',
    pathMatch: 'full'
  },
  {
    path: 'detailtirage',
    loadChildren: () => import('./detailtirage/detailtirage.module').then( m => m.DetailtiragePageModule)
  },
  {
    path: 'importliste',
    loadChildren: () => import('./importliste/importliste.module').then( m => m.ImportlistePageModule)
  },
  {
    path:'importlisteparticipant',
    loadChildren: () => import('./importer-listeparticipant/importer-listeparticipant.module').then(m=>m.ImporterListeparticipantPageModule)
  },
  {
    path: 'detail-des-listes',
    loadChildren: () => import('./detail-des-listes/detail-des-listes.module').then( m => m.DetailDesListesPageModule)
  },
  {
    path: 'detailtirageduneliste',
    loadChildren: () => import('./detail-tirage-dune-liste/detail-tirage-dune-liste.module').then( m => m.DetailTirageDuneListePageModule)
  },
  {
    path: 'popup-notification',
    loadChildren: () => import('./popup-notification/popup-notification.module').then( m => m.PopupNotificationPageModule)
  },

  

];

  @NgModule({
    imports: [
      RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
    ],
    exports: [RouterModule]
  })
  export class AppRoutingModule { }