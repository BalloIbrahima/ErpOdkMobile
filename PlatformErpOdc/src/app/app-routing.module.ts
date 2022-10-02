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
    path: 'ajouter-role',
    loadChildren: () => import('./ajouter-role/ajouter-role.module').then( m => m.AjouterRolePageModule),
    // canActivate: [AcceuilGuard] 
  },

  {
    path: 'role',
    loadChildren: () => import('./role/role.module').then( m => m.RolePageModule),
    // canActivate: [AcceuilGuard] 
  },

  {
    path: 'profil',
    loadChildren: () => import('./profil/profil.module').then( m => m.ProfilPageModule),
    // canActivate: [AcceuilGuard] 
  },
  {
    path: 'personnel',
    loadChildren: () => import('./personnel/personnel.module').then( m => m.PersonnelPageModule),
    // canActivate: [AcceuilGuard] 
  },

  {
    path: 'accueil',
    loadChildren: () => import('./accueil/accueil.module').then( m => m.AccueilPageModule),
    // canActivate: [AcceuilGuard] 
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

    path: 'forgotpassword',
    loadChildren: () => import('./forgotpassword/forgotpassword.module').then( m => m.ForgotpasswordPageModule)
  },
{
    path: 'profil',
    loadChildren: () => import('./profil/profil.module').then( m => m.ProfilPageModule)
  },

];


@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }

