import { Component, OnInit } from '@angular/core';
import {Router } from '@angular/router';
import { SalleServiceService } from '../services/salles/salle-service.service';
import { TypeActiviteService } from '../services/typeActivite/type-activite.service';
import { UtilisateurService } from '../services/utilisateur/utilisateur.service';

@Component({
  selector: 'app-creer-activite',
  templateUrl: './creer-activite.page.html',
  styleUrls: ['./creer-activite.page.scss'],
})
export class CreerActivitePage implements OnInit {

  SallesDispo:any;
  Entites:any;
  UsersActives:any;
  TypeActivite:any;
  constructor(private router:Router, private salleService:SalleServiceService,private userService:UtilisateurService,private typeActivite:TypeActiviteService) { }

  ngOnInit() {

    this.salleService.getAllDispo().subscribe(data=>{
      if(data.message=='ok'){
        this.SallesDispo=data.data
      }
    })

    this.userService.getActivesUsers().subscribe(data=>{
      if(data.message=='ok'){
        this.UsersActives=data.data
      }
    })

    this.typeActivite.getListe().subscribe(data=>{
      if(data.message=='ok'){
        this.typeActivite=data.data
      }
    })
  }



  CreerActivite(){

  }
}
