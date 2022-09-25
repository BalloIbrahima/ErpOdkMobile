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
        redirectTo: 'salles',
        pathMatch: 'full'
      },
      {
        path: 'home',
        loadChildren: () => import('../home/home.module').then( m => m.HomePageModule)
      },
      {
        path: 'sidebare',
        loadChildren: () => import('../sidebare/sidebare.module').then( m => m.SidebarePageModule)
      },
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
      { path: '**', redirectTo:'accueil',pathMatch:'full'}

    
    ]
  },

];

@NgModule({

  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DashboardPageRoutingModule {}
