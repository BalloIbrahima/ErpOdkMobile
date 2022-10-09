import { Component, OnInit } from '@angular/core';
import { EntiteService } from '../services/entite/entite.service';
import { SalleServiceService } from '../services/salles/salle-service.service';
import { TachedesignationService } from '../services/tahedesignations/tachedesignation.service';

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
  // etatselect : string;
  nom : string;
  etat: boolean;
  // if (etatselect = "Actif") {
  //   this.etat = true
  // } elsif (etatselect = "Inactif") {
  //   this.etat = false
  // }
  constructor( private tachedesign : TachedesignationService ,private salleService: SalleServiceService,private entiteService:EntiteService) { }

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

}