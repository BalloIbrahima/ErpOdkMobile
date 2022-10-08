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
import Swal from 'sweetalert2';

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
  date:any;
  datedebut:any;
  dateFin:any;
  typeactivite:String;
  libellesalle:String;
  leadNomPrenom:any;
  salles:any;
  description:any;
  image:any;
   externes:any;






  message:String;
  erreur:Boolean;
  fichier:any

  Salle:any;
  Type:any;
  lead:any;
  Utilisateur:any;
  utilisateurs:any
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

    this.userService.getActivesUsers(this.Utilisateur.login, this.Utilisateur.password).subscribe(retour=>{
      this.utilisateurs=retour.data
      console.log(this.utilisateurs)
    })


    this.entiteService.getAllEntites(this.Utilisateur.login,this.Utilisateur.password).subscribe(r=>{
      if(r.message=='ok'){
        this.Entites=r.data
        console.log(this.Entites)

      }
    })

    this.activiteService.getpersonnelsexternes(this.Utilisateur.login, this.Utilisateur.password).subscribe(retour=>{
      this.externes=retour.data
      console.log(this.externes)
    })


  }

  async presentAlert() {
    Swal.fire({
      title:'Validé!!!',
      text:'Activité créée avec Succès!!',
      icon:'success',
      heightAuto: false,
      confirmButtonColor:"#FF7900"
  }).then(()=>{

    this.router.navigate(["/dashboard/allactivity"]);
  });
  }
  async notpresent() {
    Swal.fire({
      title:'Désolé!!!\nActivité non créée',
      text:'Veuillez réessayer',
      icon:'error',
      heightAuto: false,
      confirmButtonColor:"#FF7900"
  });
  }

  CreerActivite(){

    var idSalle=null;
    var idType=null;
    var identity=null;
    var iduser=0;
    var idintervenant=null;


    //recuperation de l'id l'entite
    for(let i=0 ; i<this.Entites.length; i++){
      if(this.Entites[i].libelleentite==this.typeactivite){
        identity=this.Entites[i]
      }
    }
     //recuperation de l'id dela salle
     for(let i=0 ; i<this.SallesDisponibles.length; i++){
      if(this.SallesDisponibles[i].libelle==this.libellesalle){
        idSalle=this.SallesDisponibles[i]
      }
    }


    //recuperation de l'id du type de l'activite
    for(let i=0 ; i<this.TypesActivites.length; i++){
      if(this.TypesActivites[i].libelle==this.typeactivite){
        idType=this.TypesActivites[i]
      }
    }
     //recuperation de l'id des formateurs
     for(let i=0 ; i<this.utilisateurs.length; i++){
      if(this.utilisateurs[i].libelle==this.utilisateurs){
        iduser=this.utilisateurs[i]
        console.log(iduser)
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
    //recuperation de l'id des intervenants externes
    for(let i=0 ; i<this.externes.length; i++){
      if(this.externes[i].libelle==this.externes){
        idintervenant=this.externes[i]
        console.log(idintervenant)
      }
     }

    //creation de l'activite il manque lentite concernée dans la bdd//affaire de salles dispo a ala creation de lactivite
    //fitrage par statut et entity ne fonctionne pas en bdd 3 get deja fait
    //pour une entite recuperer tout les activites en fonction de identite (page detail entite)
    //avant la suppression afficher un message por expliquer la suppression
    var activite=[{
      "nom":this.nomActivite,
      "dateDebut":this.datedebut,
      "dateFin":this.dateFin,
      "description":this.description,
      "leader":this.lead,
      "utilisateurs":this.utilisateurs,
      "salle":idSalle,
      "typeActivite":idType,
      "intervenantExternes":this.externes
    }]


    this.activiteService.Creer(this.Utilisateur.login,this.Utilisateur.password,this.fichier,activite).subscribe(data=>{
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



}

