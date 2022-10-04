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
 
  SallesDispo:any;
  Entites:any;
  UsersActives:any;
  TypeActivites:any;
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
  salles





  
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

      this.salleService.getSalleDisponible(this.Utilisateur.login,this.Utilisateur.password).subscribe(data=>{
        this.SallesDispo=data.data
        console.log(this.SallesDispo)
      
    })

    this.typeActiviteService.getListe().subscribe(r=>{
      if(r.message=='ok'){
        this.TypeActivites=r.data
        console.log(this.TypeActivites)

      }
    })

    this.userService.getActivesUsers(this.Utilisateur.login,this.Utilisateur.password).subscribe(data=>{
      if(data.message=='ok'){
        this.UsersActives=data.data
        console.log(this.UsersActives)

      }
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
    for(let i=0 ; i<this.SallesDispo.length; i++){
      if(this.SallesDispo[i].libelle==this.libellesalle){
        idSalle=this.SallesDispo[i].id
      }
    }

    //recuperation de l'id du type
    for(let i=0 ; i<this.TypeActivites.length; i++){
      if(this.TypeActivites[i].libelle==this.typeactivite){
        idSalle=this.TypeActivites[i].id
      }
    }

    //recuperation de l'id du lead
     for(let i=0 ; i<this.UsersActives.length; i++){
      console.log(this.leadNomPrenom)
      const array=this.leadNomPrenom.split(' ')

      if(this.UsersActives[i].prenom==array[0] && this.UsersActives[i].nom==array[1]){   
        this.lead=this.UsersActives[i]
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


  //fichier selection
  selectFile(e:any) {
    //verification si une photo a été choisie ou pas
    if(!e.target.files[0] || e.target.files[0].length==0){
      this.message="Vous devez choisir une image !";
      this.erreur=true;
      return;
    }

    //verification du type de fichier choisi pour recaler si ce n'est pas une photo
    var typeFichier=e.target.files[0].type;
    if(typeFichier.match(/image\/*/)==null){
      this.message="Seul les images sont suportées";
  
      return;

    }



    if(e.target.files){
      var reader= new FileReader();
      reader.readAsDataURL(e.target.files[0]);
      reader.onload=(event:any)=>{
        this.message="";
        //this.fichier=event.target.result;
        this.fichier=e.target['files'][0];
      }
    }
  }

}
