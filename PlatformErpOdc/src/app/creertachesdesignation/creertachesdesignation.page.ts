import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { ActiviteService } from '../services/activite/activite.service';
import { EntiteService } from '../services/entite/entite.service';
import { SalleServiceService } from '../services/salles/salle-service.service';
import { TachedesignationService } from '../services/tahedesignations/tachedesignation.service';
import { StatusService } from '../services/statut/status.service';
import { UtilisateurService } from '../services/utilisateur/utilisateur.service';

@Component({
  selector: 'app-creertachesdesignation',
  templateUrl: './creertachesdesignation.page.html',
  styleUrls: ['./creertachesdesignation.page.scss'],
})
export class CreertachesdesignationPage implements OnInit {
  Entites:any;
  Utilisateur : any;
  Allstatut :any;
  sallesDipo:any
  sallesDipoLength:any
  personEx:any
  personIn:any
  //:::::::::::::::::::activité encour::::::::::::::::::::::::::::::::::::::::::::::
  ActiviteCourant:any
  // etatselect : string;
  idRecuperer:any
  nom : string;
  etat: boolean;

  //:::::::::::::designation::::::::::::::::::::::::
  designations: any;
  designation: any;


  //:::::::::::::::::::::::::create Tache::::::::::::::::::::::::

  idPorteurexterne:any;
  idPorteurinterne:any;
  libelleSalle: any;
  idActivites: any;
  libelleDesignation: any;
  libelleStatut: any;
  personneEx: any;
  personneIn: any;
  datedebut:any;
  datefin:any;


  // if (etatselect = "Actif") {
  //   this.etat = true
  // } elsif (etatselect = "Inactif") {
  //   this.etat = false
  // }
  
  Commissions:any;
  constructor( private tachedesign : TachedesignationService,private user: UtilisateurService ,private route: ActivatedRoute , private  statut : StatusService, private activiteService : ActiviteService ,private salleService: SalleServiceService,private entiteService:EntiteService) { }

  ngOnInit() {
    
    //::::::::::::::recuperation de l'id de l'activité :::::::::::::::::::::::::::::::

    this.idActivites = this.route.snapshot.params['id'];
//::::::::::::::fin de recuperation :::::::::::::::::::::::::::::::

//::::::::::::::recuperation du User qui se trouve dans le LocalStorage :::::::::::::::::::::::::::::::

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

    this.tachedesign.getAlldesignation(this.Utilisateur.login, this.Utilisateur.password).subscribe(retour=>{
  this.designations = retour.data
  console.log(retour)
    });



    //::::::::::::::::::::::::::::: getactivitybyId:::::::::::::::::::::::::::::::::::::::::::::::
   this.activiteService.getactivitybyId(this.Utilisateur.login, this.Utilisateur.password,this.idActivites).subscribe(retour=>{
    this.idActivites 
    this.ActiviteCourant=retour.data
    console.log(this.ActiviteCourant)
    this.idRecuperer = this.ActiviteCourant.id;

   })

   this.statut.getStatut(this.Utilisateur.login, this.Utilisateur.password).subscribe(retour=>{
    this.Allstatut = retour.data
    console.log(this.Allstatut)
   })
   

   this.activiteService.getpersonnelsexternes(this.Utilisateur.login, this.Utilisateur.password).subscribe(retour=>{
    this.personEx = retour.data
    console.log(retour)
    })
//:::::::::::::::::::: get all User ::::::::::::::::::::::::::::::::::::::

this.user.getAllUsers(this.Utilisateur.login, this.Utilisateur.password).subscribe(retour=>{
  this.personIn = retour.data
  console.log(this.personIn)
    });

    // for (let index = 0; index < this.personEx.length; index++) {
    //   this.personIn = this.personIn
      
    // }

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




  createTache(){

   var idSalle:any;

   var idDesignation:any;
   var idStatus: any;

  //::::::::::::::::::::::::::::::::recuperer l'id de la salle::::::::::::::::::::::::::::::::

  for(let i=0; i<this.sallesDipo.length; i++){
    if(this.sallesDipo[i].libelle == this.libelleSalle){
      idSalle=this.sallesDipo[i]
    }
  }


  for(let i=0; i<this.designations.length; i++){
    if(this.designations[i].libelle == this.libelleDesignation){
      idDesignation = this.designations[i]
    }
  }

  for(let i=0; i<this.Allstatut.length; i++){
    if(this.Allstatut[i].libelle == this.libelleStatut){
      idStatus = this.Allstatut[i]
    }
  }







  for(let i=0; i<this.personEx.length; i++){
    if(this.personEx[i].libelle == this.personneEx){
      this.idPorteurexterne = this.personEx[i]
    }
  }
  
  
  for(let i=0; i<this.personIn.length; i++){
    if(this.personIn[i].libelle == this.personneIn){
      this.idPorteurinterne = this.personIn[i]
    }
  }
  





  var FormateursUsers=[];
  var FormateursExters=[];


  for(let i=0;i<this.Commissions.length;i++){
    const array=this.Commissions[i].split(" ")

    for(let j=0 ; j<this.personIn.length; j++){

      if(this.personIn[j].nom==array[0] && this.personIn[j].prenom==array[1]){
        console.log(this.personIn[j])

        FormateursUsers.push(this.personIn[j])
      }
    }

    for(let j=0 ; j<this.personEx.length; j++){

      if(this.personEx[j].nom==array[0] && this.personEx[j].prenom==array[1]){
        console.log(this.personEx[j])

        FormateursExters.push(this.personEx[j])
      }
    }

  }









    var tache=[{
      "datedebut": this.datedebut,
      "datefin": this.datefin,
      "activite":  this.ActiviteCourant,
      "designation": idDesignation,
      "statut":  idStatus,
      "porteurexterne":this.idPorteurexterne,
      "porteurinterne"	:this.idPorteurinterne,
      "salle": idSalle,
      "commissionsInterne":FormateursUsers,
      "commissionsExterne":FormateursExters
    }]


this.tachedesign.CreateTache(this.Utilisateur.login, this.Utilisateur.password,tache).subscribe(retour=>{
 console.log(retour)
})

  }

}