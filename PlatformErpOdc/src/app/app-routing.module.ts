import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
<<<<<<< HEAD
    path: 'accueil',
    redirectTo: 'accueil',
=======
    path: '',
    redirectTo: 'home',
>>>>>>> 54b3677d466430d847d6b501322b3876b841cace
    pathMatch: 'full'
  },
  {
    path: 'login',
    loadChildren: () => import('./login/login.module').then( m => m.LoginPageModule)
  },
<<<<<<< HEAD
=======
  {
    path: 'personnels',
    loadChildren: () => import('./personnel/personnel.module').then( m => m.PersonnelPageModule)
  },
>>>>>>> 54b3677d466430d847d6b501322b3876b841cace
  {
    path: 'nouveau-personnel',
    loadChildren: () => import('./nouveaupersonnel/nouveaupersonnel.module').then( m => m.NouveaupersonnelPageModule)
  },
  {
    path: 'detailpersonnel',
    loadChildren: () => import('./detailpostulant/detailpostulant.module').then( m => m.DetailpostulantPageModule)
  },
  // {
  //   path: 'profile',
  //   loadChildren: () => import('./profile/profile.module').then( m => m.ProfilePageModule)
  // },


<<<<<<< HEAD

=======
>>>>>>> 54b3677d466430d847d6b501322b3876b841cace
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
