import { AlertController } from '@ionic/angular';
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
   private entiteService:EntiteService,
   private alertController : AlertController) { }
 
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

  async presentAlert() {
    const alert = await this.alertController.create({
      header: 'Validé!!!',
      subHeader: 'Activité créée avec Succès!!',

      buttons: ['OK'],
    });

    await alert.present();
  }
  async notpresent() {
    const alert = await this.alertController.create({
      header: 'Activité non créée!!!',
      subHeader: 'veuillez réessayer!!',

      buttons: ['OK'],
    });

    await alert.present();
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

  
    //recuperation de l'id du type de l'activite
    for(let i=0 ; i<this.TypesActivites.length; i++){
      if(this.TypesActivites[i].libelle==this.typeactivite){
        idType=this.TypesActivites[i].id
      }
    }

    //recuperation de l'id du lead
     for(let i=0 ; i<this.PersonnelsActives.length; i++){
      console.log(this.leadNomPrenom)
      const array=this.leadNomPrenom.split(" ")

      if(this.PersonnelsActives[i].prenom==array[0] && this.PersonnelsActives[i].nom==array[1]){   
        this.lead=this.PersonnelsActives[i]
      }
    }

    //creation de l'activite
    var activite=[{
      "nom":this.nomActivite,
      "dateDebut":this.datedebut,
      "dateFin":this.dateFin,
      "description":this.description,
      "leader":this.lead,
      "utilisateurs":[this.lead]
    }]
    

    
    this.activiteService.Creer(this.Utilisateur.login,this.Utilisateur.password,idSalle,idType,this.fichier,activite).subscribe(data=>{
      console.log(data)
      this.presentAlert()
    })
  }

            //fichier selection
            selectFile(e:any){
              //verification si une photo a été choisie ou pas
              if(!e.target.files[0] || e.target.files[0].length==0){
                this.message="Vous devez choisir un fichier execel !";
                this.erreur=true;
                return;
              }

              //verification du type de fichier choisi pour recaler si ce n'est pas une photo
              var typeFichier=e.target.files[0].type;
              



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
  
