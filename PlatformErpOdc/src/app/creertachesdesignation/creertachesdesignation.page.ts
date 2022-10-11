import { DOCUMENT } from '@angular/common';
import { Component, Inject, OnInit } from '@angular/core';
import { EntiteService } from '../services/entite/entite.service';
import { SalleServiceService } from '../services/salles/salle-service.service';
import { TachedesignationService } from '../services/tahedesignations/tachedesignation.service';
import { UtilisateurService } from '../services/utilisateur/utilisateur.service';

@Component({
  selector: 'app-creertachesdesignation',
  templateUrl: './creertachesdesignation.page.html',
  styleUrls: ['./creertachesdesignation.page.scss'],
})
export class CreertachesdesignationPage implements OnInit {
  Entites:any;
  Utilisateur : any;
  sallesDipo:any
  sallesDipoLength:any
  utilisateurs:any
 
  // etatselect : string;
  nom : string;
  etat: boolean;
  // if (etatselect = "Actif") {
  //   this.etat = true
  // } elsif (etatselect = "Inactif") {
  //   this.etat = false
  // }
  constructor(@Inject(DOCUMENT) document: Document, private tachedesign : TachedesignationService ,private salleService: SalleServiceService,private entiteService:EntiteService,private userService:UtilisateurService) { 
  }

  ngOnInit() {
    
    this.Utilisateur=JSON.parse(localStorage.getItem('utilisateur')) ;

    this.salleService.getSalleDisponible(this.Utilisateur.login,this.Utilisateur.password).subscribe(data=>{
      this.sallesDipo=data.data;
      this.sallesDipoLength = data.data.length
      console.log(data.data)
    });

   
    
    

    this.entiteService.getAllEntites(this.Utilisateur.login, this.Utilisateur.password).subscribe(retour=>{
      this.Entites=retour.data
      console.log(this.Entites)
    });

    
     //!::::::::::::total perso ::::::::::::
     this.userService.getActivesUsers(this.Utilisateur.login, this.Utilisateur.password).subscribe(retour=>{
      this.utilisateurs=retour.data
      console.log(this.utilisateurs)
    })


    







  }

  creerDesignation() {
    this.tachedesign.creerDesignation(this.Utilisateur.login, this.Utilisateur.password, this.nom, this.etat).subscribe({
      next : reponse => {
        alert(reponse.data)
      },
      error : data => {
        alert(data.data)
      }
    })
  }

  // slct(){
  //   const div= document.getElementById('multiple-select');
  //   div.mobiscroll().select({
  //     inputElement: document.getElementById('my-input'),
  //     touchUi: false
  //   });
  // //   $('#multiple-select').mobiscroll().select({
  // //     inputElement: document.getElementById('my-input'),
  // //     touchUi: false
  // // });
  // }

}