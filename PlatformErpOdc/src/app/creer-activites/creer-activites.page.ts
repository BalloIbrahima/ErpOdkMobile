import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ActiviteService } from '../services/activite/activite.service';
import { EntiteService } from '../services/entite/entite.service';
import { SalleServiceService } from '../services/salles/salle-service.service';
import { TypeActiviteService } from '../services/typeActivite/type-activite.service';
import { UtilisateurService } from '../services/utilisateur/utilisateur.service';

@Component({
  selector: 'app-creer-activites',
  templateUrl: './creer-activites.page.html',
  styleUrls: ['./creer-activites.page.scss'],
})
export class CreerActivitesPage implements OnInit {


  Entites:any;
  TypesActivites:any;
  SallesDisponibles:any;
  PersonnelsActives:any;

  Utilisateur:any;
 
  constructor(private salleService:SalleServiceService,private entiteService:EntiteService,private typeActiviteService:TypeActiviteService,private userService:UtilisateurService) { }

  ngOnInit() {

    this.Utilisateur=JSON.parse(localStorage.getItem('utilisateur')) ;

    this.entiteService.getAllEntites(this.Utilisateur.login, this.Utilisateur.password).subscribe(retour=>{
      this.Entites=retour.data
      console.log(this.Entites)
    })


    this.userService.getActivesUsers(this.Utilisateur.login, this.Utilisateur.password).subscribe(retour=>{
      this.PersonnelsActives=retour.data
      console.log(this.PersonnelsActives)
    })

    this.typeActiviteService.getListe(this.Utilisateur.login, this.Utilisateur.password).subscribe(retour=>{
      this.TypesActivites=retour.data;
      console.log(this.TypesActivites)
    })

    this.salleService.getSalleDisponible(this.Utilisateur.login, this.Utilisateur.password).subscribe(retour=>{
      console.log(retour)
    })
  }     
}
