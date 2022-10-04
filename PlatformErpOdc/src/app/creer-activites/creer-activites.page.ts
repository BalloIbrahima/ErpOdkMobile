import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ActiviteService } from '../services/activite/activite.service';
import { SalleServiceService } from '../services/salles/salle-service.service';
import { TypeActiviteService } from '../services/typeActivite/type-activite.service';
import { UtilisateurService } from '../services/utilisateur/utilisateur.service';

@Component({
  selector: 'app-creer-activites',
  templateUrl: './creer-activites.page.html',
  styleUrls: ['./creer-activites.page.scss'],
})
export class CreerActivitesPage implements OnInit {

  Entites: any;
  Personnels: any;
  TypesActivites: any;
  SallesDisponnibles: any;

  Utilisateur: any;

  constructor(private router:Router, private salleService:SalleServiceService,private userService:UtilisateurService,private typeActiviteService:TypeActiviteService,private activiteService:ActiviteService) { }

  ngOnInit() {

    //recupération user de localstorage 

    
 
  }



 
}
