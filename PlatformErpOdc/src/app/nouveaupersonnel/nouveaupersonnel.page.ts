import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { EntiteService } from '../services/entite/entite.service';
import { RoleService } from '../services/role/role.service';
import { UtilisateurService } from '../services/utilisateur/utilisateur.service';

@Component({
  selector: 'app-nouveaupersonnel',
  templateUrl: './nouveaupersonnel.page.html',
  styleUrls: ['./nouveaupersonnel.page.scss'],
})
export class NouveaupersonnelPage implements OnInit {

  Entites:any;
  Utilisateur:any;
  Roles:any;
  formatMail:any;
  nom:any;
  prenom:any;
  email:any;
  domaine:any;
  genre:any;
  image:File;
  entite:any;
  activite:any;
  role:any;

  EntiteSelectioner:any;
  RoleSelectionner:any;

  Genre: number;

  constructor( private alertController : AlertController,private entiteService:EntiteService,private roleservice:RoleService,private userService:UtilisateurService) { }

  ngOnInit() {
    this.Utilisateur=JSON.parse(localStorage.getItem('utilisateur')) 
    console.log(this.Utilisateur)

    this.entiteService.getAllEntites(this.Utilisateur.login,this.Utilisateur.password).subscribe(data=>{
      if(data.message=='ok'){
        this.Entites=data.data
        console.log(this.Entites)

      }
    })

    this.roleservice.getAllRole(this.Utilisateur.login,this.Utilisateur.password).subscribe(data=>{
      if(data.message=="ok"){
        this.Roles=data.data
        console.log(this.Roles)
      }
    })

    this.roleservice.getListeFormatMail(this.Utilisateur.login,this.Utilisateur.password).subscribe(data=>{
      if(data.message=="ok"){
        this.formatMail=data.data
        console.log(this.formatMail)
      }
    })
    
    
  }
  envoyerImage(event: any){
    this.image = event.target["files"][0];
    console.log(this.image)
  }


  
  async presentAlert() {
    const alert = await this.alertController.create({
      header: 'Validé!!!',
      subHeader: 'Personnel créée avec Succès!!',

      buttons: ['OK'],
    });

    await alert.present();
  }
  async notpresent() {
    const alert = await this.alertController.create({
      header: 'Personnel non créée!!!',
      subHeader: 'veuillez réessayer!!',

      buttons: ['OK'],
    });

    await alert.present();
  }


  CreateUser(){

    for(let i=0;i<this.Entites.length;i++){
      if(this.Entites[i].libelleentite==this.entite){
        this.EntiteSelectioner=this.Entites[i]
      }
    }

    for(let i=0; i<this.Roles.length;i++){
      if(this.Roles[i].libellerole==this.role){
        this.RoleSelectionner=this.Roles[i]
      }
    }

    

    console.log(this.RoleSelectionner)
    console.log(this.EntiteSelectioner)
   
    if(this.genre == 'Masculin')
    {
      this.Genre = 0
    }else{
      this.Genre = 1
    }
    this.userService.CreateUser(this.Utilisateur.login,this.Utilisateur.password ,this.nom,this.prenom,this.email+this.domaine,this.Genre,this.image,this.EntiteSelectioner,this.RoleSelectionner).subscribe(retour=>{
      console.log(retour)
      this.presentAlert()
    })
  }

}
