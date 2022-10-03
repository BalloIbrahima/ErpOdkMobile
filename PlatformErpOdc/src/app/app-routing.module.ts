import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { AcceuilGuard } from './guard/acceuil/acceuil.guard';
import { ProfilPageModule } from './profil/profil.module';
import { ProfilPage } from './profil/profil.page';

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
    // canActivate: [AcceuilGuard] 
  },
  {

    path: 'forgotpassword',
    loadChildren: () => import('./forgotpassword/forgotpassword.module').then( m => m.ForgotpasswordPageModule)
  },
  {
    path: 'creer-activites',
    loadChildren: () => import('./creer-activites/creer-activites.module').then( m => m.CreerActivitesPageModule)
  },
  {
    path: 'modifier-salle',
    loadChildren: () => import('./modifier-salle/modifier-salle.module').then( m => m.ModifierSallePageModule)
  }



];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
