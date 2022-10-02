import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardPage } from './dashboard.page';


const routes: Routes = [
  {
    path:"",
    component:DashboardPage,
    children:[
      {
        path: '',
        redirectTo: 'lier-salle-activity',
        pathMatch: 'full'
      },
      {
        path: 'home',
        loadChildren: () => import('../home/home.module').then( m => m.HomePageModule)
      },
      // {
      //   path: 'sidebare',
      //   loadChildren: () => import('../sidebare/sidebare.module').then( m => m.SidebarePageModule)
      // },
      {
        path: 'accueil',
        loadChildren: () => import('../accueil/accueil.module').then( m => m.AccueilPageModule)
      },
      {
        path: 'ajout-entite',
        loadChildren: () => import('../ajout-entite/ajout-entite.module').then( m => m.AjoutEntitePageModule)
      },
      {
        path: 'creer-activite',
        loadChildren: () => import('../creer-activite/creer-activite.module').then( m => m.CreerActivitePageModule)
  
      },
      {
        path: 'salles',
        loadChildren: () => import('../salles/salles.module').then( m => m.SallesPageModule)
      },
      {
        path: 'modifieruser',
        loadChildren: () => import('../modifieruser/modifieruser.module').then( m => m.ModifieruserPageModule)
      },
      {
        path: 'addsalle',
        loadChildren: () => import('../addsalle/addsalle.module').then( m => m.AddsallePageModule)
      },
      {
        path: 'modifiersalle/:id',
        loadChildren: () => import('../modifiersalle/modifiersalle.module').then( m => m.ModifiersallePageModule)
      },
      {
        path: 'useraddform',
        loadChildren: () => import('../useraddform/useraddform.module').then( m => m.UseraddformPageModule)
    
      },

      
  {
    path: 'allactivity',
    loadChildren: () => import('../allactivity/allactivity.module').then( m => m.AllactivityPageModule)
  },
  {
    path: 'detailactivity',
    loadChildren: () => import('../detailactivity/detailactivity.module').then( m => m.DetailactivityPageModule)
  },
  {
    path: 'salles',
    loadChildren: () => import('../salles/salles.module').then( m => m.SallesPageModule)
  },
  {
    path: 'lier-salle-activity',
    loadChildren: () => import('../lier-salle-activity/lier-salle-activity.module').then( m => m.LierSalleActivityPageModule)
  },
  {
    path: 'creer-salle',
    loadChildren: () => import('../creer-salle/creer-salle.module').then( m => m.CreerSallePageModule)
  },
  {
    path: 'tachedesignation',
    loadChildren: () => import('../tachedesignation/tachedesignation.module').then( m => m.TachedesignationPageModule)
  },
  {
    path: 'creertachesdesignation',
    loadChildren: () => import('../creertachesdesignation/creertachesdesignation.module').then( m => m.CreertachesdesignationPageModule)
  },

      { path: '**', redirectTo:'accueil',pathMatch:'full'}

    
    ]
  },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardPageRoutingModule {}
