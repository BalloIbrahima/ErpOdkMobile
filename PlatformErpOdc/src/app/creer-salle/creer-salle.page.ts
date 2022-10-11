import { Component, OnInit } from '@angular/core';
import { EntiteService } from '../services/entite/entite.service';
import { SalleServiceService } from '../services/salles/salle-service.service';
import { TypeActiviteService } from '../services/typeActivite/type-activite.service';
import { UtilisateurService } from '../services/utilisateur/utilisateur.service';

@Component({
  selector: 'app-creer-salle',
  templateUrl: './creer-salle.page.html',
  styleUrls: ['./creer-salle.page.scss'],
})
export class CreerSallePage implements OnInit {

  Entites:any;
  Utilisateur:any;

  // entiteNom:any;
  nom:any;
  nombrePlace:any;
  description:any;

  niveau:any;
  EntiteSelectioner:any;


  alertTrue: boolean = false;
  alertFalse: boolean = false;
  niveauEtage: string;
  alertNomTrue: boolean =false;
  alertNomFalse: boolean =false;
  messageerror: string;

  constructor(private salleService:SalleServiceService,private entiteService:EntiteService,private typeActiviteService:TypeActiviteService,private userService:UtilisateurService) { }

  ngOnInit() {

    this.Utilisateur=JSON.parse(localStorage.getItem('utilisateur')) ;

    this.entiteService.getAllEntites(this.Utilisateur.login, this.Utilisateur.password).subscribe(retour=>{
      this.Entites=retour.data
      console.log(this.Entites)
    })
  }

  CreerSalle(){

    // for(let i=0;i<this.Entites.length;i++){
    //   if(this.Entites[i].nom==this.entiteNom){
    //     this.EntiteSelectioner=this.Entites[i]
    //   }
    // }
    if(this.niveau == 0){
      this.niveauEtage = "Rez-de-chaussée"
    }
    else if(this.niveau == 1){
      this.niveauEtage = this.niveau + "ère étage"
    }else{
      this.niveauEtage = this.niveau + "ème étage"
    }

    if (this.nom == null) {
      this.alertNomTrue=true
      this.alertNomFalse=false
      this.messageerror="Le champ nom vide!!"
    }else if(this.nombrePlace == null){
      this.alertNomTrue=true
      this.alertNomFalse=false
      this.messageerror="Le champ nombre place est vide!!"
    }else if(this.niveau == null){
      this.alertNomTrue=true
      this.alertNomFalse=false
      this.messageerror="Le champ niveau est vide!!"
    }
    else{
      this.salleService.ajoutSalle(this.Utilisateur.login,this.Utilisateur.password,this.nom,this.description,this.niveauEtage,this.nombrePlace,this.Utilisateur).subscribe(retour=>{
      console.log(retour)

      if(retour.message == 'ok'){
        this.alertTrue = true
        this.alertFalse = false
      }else{
        this.alertTrue = false
        this.alertFalse = true
      }

    })
    // this.alertNomTrue=false
    // this.alertNomFalse=true
    }



  }

}
