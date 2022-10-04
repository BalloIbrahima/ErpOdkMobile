import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
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

 //////////variables qui recuperent les data
 
 Entites:any;
 TypesActivites:any;
 SallesDisponibles:any;
 PersonnelsActives:any;
//////////variables name et ngmodel
 typeActivite
  typeentite:any;
  nomActivite:any;
  duree:any;
  date:Date;
  datedebut:Date;
  dateFin:Date;
  typeactivite:String;
  libellesalle:String;
  leadNomPrenom:String;
  salles:any;
  description:any;
  image:any;





  
  message:String;
  erreur:Boolean;
  fichier:any

  Salle:any;
  Type:any;
  lead:any;
  Utilisateur:any;
  constructor(private router:Router, private salleService:SalleServiceService,private userService:UtilisateurService,private typeActiviteService:TypeActiviteService,
    private activiteService:ActiviteService, private http:HttpClient,
   private entiteService:EntiteService) { }
 
  ngOnInit() {
    this.Utilisateur=JSON.parse(localStorage.getItem('utilisateur'))

     console.log("recuperation de l'utilisateur "+this.Utilisateur)

      this.salleService.getSalleDisponible(this.Utilisateur.login,this.Utilisateur.password).subscribe(r=>{
        this.SallesDisponibles=r.data
        console.log(this.SallesDisponibles)
      })

    this.typeActiviteService.getListe(this.Utilisateur.login,this.Utilisateur.password).subscribe(r=>{
      if(r.message=='ok'){
        this.TypesActivites=r.data
        console.log(this.TypesActivites)

      }
    })

    this.Utilisateur=JSON.parse(localStorage.getItem('utilisateur')) ;

    this.entiteService.getAllEntites(this.Utilisateur.login, this.Utilisateur.password).subscribe(retour=>{
      this.Entites=retour.data
      console.log(this.Entites)
    })


    this.userService.getActivesUsers(this.Utilisateur.login, this.Utilisateur.password).subscribe(retour=>{
      this.PersonnelsActives=retour.data
      console.log(this.PersonnelsActives)
    })

   
    this.entiteService.getAllEntites(this.Utilisateur.login,this.Utilisateur.password).subscribe(r=>{
      if(r.message=='ok'){
        this.Entites=r.data
        console.log(this.Entites)

      }
    })




  }



  CreerActivite(){
    
    var idSalle=0;
    var idType=0;
    //recuperation de l'id dela salle
    for(let i=0 ; i<this.SallesDisponibles.length; i++){
      if(this.SallesDisponibles[i].libelle==this.libellesalle){
        idSalle=this.SallesDisponibles[i].id
      }
    }

    //recuperation de l'id du type
    for(let i=0 ; i<this.TypesActivites.length; i++){
      if(this.TypesActivites[i].libelle==this.typeactivite){
        idSalle=this.TypesActivites[i].id
      }
    }

    //recuperation de l'id du lead
     for(let i=0 ; i<this.PersonnelsActives.length; i++){
      console.log(this.leadNomPrenom)
      const array=this.leadNomPrenom.split(' ')

      if(this.PersonnelsActives[i].prenom==array[0] && this.PersonnelsActives[i].nom==array[1]){   
        this.lead=this.PersonnelsActives[i]
      }
    }

    //creation de l'activite
    var activite={
      "nom":this.nomActivite,
      "dateDebut":this.datedebut,
      "dateFin":this.dateFin,
      "description":"descrip",
      "leader":this.lead,
      "utilisateurs":[this.lead]
    }

    this.activiteService.Creer(this.Utilisateur.id,idSalle,idType,this.fichier,activite).subscribe(data=>{
      console.log(data)
    })
  }


  ////
  // ActiviteChange(){
  //   console.log(this.typeactivite)
  //   if(this.typeactivite=="Talk"){
  //     this.isTalk==true
  //     this.isEvenement==false
  //     this.isFormation==false
  //   }else if(this.typeactivite=="Evenement"){
  //     this.isTalk==false
  //     this.isEvenement==true
  //     this.isFormation==false
  //   }else if(this.typeactivite=="Formations"){
  //     this.isTalk==false
  //     this.isEvenement==false
  //     this.isFormation==true
  //   }
  // }


}
  
